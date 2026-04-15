const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const app=(express());
const path=require('path');
const multer=require('multer');
app.use(express.static("dist"));
const { request } = require("http");
const { faDatabase } = require("@fortawesome/free-solid-svg-icons/faDatabase");
app.use('/upload',express.static('upload'));
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"orphanage"
})

// chilf form 
app.post("/childform",(request,response)=>{
    const sql="insert into child (cname,cid,gender,dt,issues,bgroup,age,phno,lang,img)values(?)";
    const values=[
            request.body.cname,
            request.body.cid,
            request.body.gender,
            request.body.dt,
            request.body.issues,
            request.body.bgroup,
            request.body.age,
            request.body.phno,
            request.body.lang,
            request.body.img,
              
    ]
    db.query(sql,[values],(err,data)=>{
        if(err)
        {
            return response.json("Error"+err);
        }
        {
            return response.json("Successfully")
        }
    })
});

    const storage=multer.diskStorage({
        destination:function(request,file,cb){
            cb(null,'upload/image/');
        },
        filename:function(request,file,cb){
            cb(null,Date.now()+path.extname(file.originalname));
        }
    });
    const upload=multer({storage,storage})

    
// upload Image 
    app.post('/uploading',upload.single('file'),(request,response)=>{
        try{
            console.log(request.file.fieldname)
            response.send({
                message:request.file.filename,
                file:request.file,
            });
        }
        catch(error){
            response.status(500).send({message:"failed to upload file",error});
        }

    });

    //child display
    app.get("/",(request,response)=>{
        const sql="select * from child"
        db.query(sql,(err,data)=>{
            if(err){
                return response.json("Error"+err)
            }
            return response.json(data)
        })
    });

    //child detail
    app.get("/Childdetail/:id",(request,response)=>{
       const sql="select * from child where id=?"
       const id=request.params.id;

       db.query(sql,[id],(err,data)=>{
        if(err)
        {
            return response.json(err +"Error")
        }
        {
            return response.json(data)
        }
       })
    })


    //Child edit
     app.get('/edit/:id',(request,response)=>{
        const sql="select * from child where id=?"
        const id=request.params.id;

        db.query(sql,[id],(err,data)=>{
            if(err)
            {
                return response.json({message:" Error to check"+err})
            }

            {
                return response.json(data)
            }
        })

     })

//child update

app.put("/Childupdate/:id",(request,response)=>{
    const sql="update child set cname=?, cid=?, gender=?, dt=?, issues=?, bgroup=?, age=?, phno=?, lang=? where id=?";
    const values=[
            request.body.cname,
            request.body.cid,
            request.body.gender,
            request.body.dt,
            request.body.issues,
            request.body.bgroup,
            request.body.age,
            request.body.phno,
            request.body.lang,
            request.params.id
            
    ];
    console.log(values)
    db.query(sql,[...values],(err,data)=>{
        if(err)
        {
            return response.json({message: "Error"+err})
        }
        {
            return response.json({message:"data Changed successfully"})
        }
    });

});


// User child display
    app.get("/",(request,response)=>{
        const sql="select * from child ";

        db.query(sql,(err,data)=>{
            if(err)
            {
                return response.json("Error"+err);
            }
            return response.json(data);
        });
    });

//User Child detail

app.get("/Userchilddetail/:id",(request,response)=>{
    const sql="select * from child where id=?"
    const id=request.params.id;
    db.query(sql,[id],(err,data)=>{
        if(err){
            return response.json(err+"Error is Server");
        }
        return response.json(data);
    })
})


//User register
app.post('/useregister/',(request,response)=>{
    const sql="insert into userregister(name,phono,email,address,uname,pass)values(?,?,?,?,?,?)";
    const values=[
        request.body.cnam,
        request.body.phno,
        request.body.email,
        request.body.address,
        request.body.unam,
        request.body.pass
    ]
    db.query(sql,values,(err,data)=>{
        if(err)
        {
            return response.json(err+"Error is backend")
        }
        return response.json(data)
    })
})

//user child login

app.post('/userlogin/',(request,response)=>{
    const sql='select * from userregister where uname=? and pass=?'
    const values=[
        request.body.uname,
        request.body.pass
    ]
     console.log(request.body.uname, request.body.pass)
    db.query(sql,[request.body.uname, request.body.pass],(err,data)=>{
       
        if(err)
        {
            return response.json(err+"Error is backend");
        }

        return response.json(data);
    })
})

//user request check

    app.post("/userrequestcheck/",(request,response)=>{
        const sql="select * from childrequest where cid=? and uid=?"
        const values=[
            request.body.id,
            request.body.uid
        ]
        
        db.query(sql,values,(err,data)=>{
            if(err)
            {
                
                return response.json(err+"backend")
            }     
            else{
                console.log(data)
                 return response.json(data)
            }
                   
        })
    })

     
//user child request
app.post("/userchildrequest/",(request,response)=>{
    const sql='insert into childrequest (uid,cid,st)values(?)'
    const values=[
        request.body.uid,
        request.body.id,
        'Request'
    ]
    db.query(sql,[values],(err,data)=>{
        if(err)
        {
            return response.json(err)
        }
        else
        {
            return response.json("Successfully")
        }
    })
})

//child request page

app.get('/childrequestcheck/',(request,response)=>{
 
    const sql="select * from childrequest join userregister on childrequest.uid=userregister.id join child on child.id=childrequest.cid"
        
    db.query(sql,(err,data)=>{
        if(err)
        {
            return response.json(err)
        }
        return response.json(data)
    })
})

// Child request page

app.put('/childadopted/:id/:uid/:cid',(request,response)=>{
    const sql='update child set st=? where id=? '
    const sql1='update childrequest set st=? where uid=? and cid=?'

    const values=[
        'Adopted',
        request.params.id 
    ]

    const values1=[
        'Adopted',
        request.params.uid,
        request.params.id

    ]
    console.log(values)
    console.log(values1)
    db.query(sql,values,(err,data)=>{
        if(err)
        {
            return response.json(err)
        }
         db.query(sql1,values1,(err1,data1)=>{
               if(err1){
            return response.json("Successfully")
        }
            })
            

        
    })
})


// fundinf login 

app.post("/fundlogin/",(request,response)=>{
    const sql="select * from userregister where uname=? and pass=?";
    const values=[
        request.body.uname,
        request.body.pass
    ];
    console.log(values)
    db.query(sql,values,(err,data)=>{
        if(err)
        {
            return response.json(err+"Error")
        }
        return response.json(data)
    })
})


// Funding open  page

app.get('/Funding/:uid',(request,response)=>{
    const sql="select * from userregister  where uid=?";
    const uid= request.params.uid;

    console.log(uid)
    db.query(sql,[uid],(err,data)=>{
        if(err)
        {
        return response.json(err+"Error")
        }
        return response.json(data)
    })

})


// Funding Saving 

app.post('/fundingsave/',(request,response)=>{
    const sql="insert into funding (uid,amount,dt,purp) values(?)";

    const values=[
        request.body.uid,
        request.body.amout,
        request.body.date,
        request.body.purp
    ]
    console.log(values)
    db.query(sql,[values],(err,data)=>{
        if(err)
        {
            return response.json(err)
        }
        return response.json("successfully")
    })
})


app.listen(5058,()=>{
    console.log("server start");
})
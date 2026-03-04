import axios from "axios";
import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



export default function Childupdate(){
  const{id}=useParams()
   

    useEffect(()=>{
        axios.get('http://localhost:5058/edit/'+id)
        .then(response=>{
          setValues({...values,cname:response.data[0].cname,
            cid:response.data[0].cid,
            gender:response.data[0].gender,
            img:response.data[0].img,
            dt:response.data[0].dt,
            issues:response.data[0].issues,
            bgroup:response.data[0].bgroup,
            age:response.data[0].age,
            phno:response.data[0].phno,
            lang:response.data[0].lang})
            console.log(response)
        })
        .catch(error=>{
          console.log(error+" Error")
        })
    },[])    
     const[values,setValues]=useState({
        cname:"",
        cid:"",
        gender:"",
        img:"",
        dt:"",
        issues:"",
        bgroup:"",
        age:"",
        phno:"",
        lang:"",
       
    })



    //update
    const navigate=useNavigate()
    function handlesubmit(event){
      event.preventDefault()
      axios.put("http://localhost:5058/Childupdate/"+id,values)
    .then(res=>{
      console.log(res)
      alert("The value are change")
       console.log(res.values)
      navigate("/Childdisplay/")
    })
    .catch(error=>
      console.log("Error"+error)
    )
    }
    
return(
     <section className="update" id="">
        <div className="update-form m-4">
            
            <form className="row g-2  text-light p-4" onSubmit={handlesubmit} >
                 <h1 className="text-center fw-bold text-light  ">Child's Orphanage</h1>
                 <h3 className="text-center fw-bold text-light  ">Child Form ! </h3>
                 
    <div className="col-md-6 ">
    <label for="cname" className="form-label">Child Full Name</label>
    <input type="text" className="form-control" name="cname"  placeholder="Name"  value={values.cname} onChange={(e)=>setValues({...values,cname:e.target.value})}  required />
  </div>

   <div className="col-md-3 ">
    <label for="Cid" className="form-label">Child Identification No</label>
    <input type="text" className="form-control" name="Cid"  placeholder="i'd no" value={values.cid} onChange={(e)=>setValues({...values,cid:e.target.value})} required/>
  </div>

  <div className="col-md-4">
    <label for="Gender" className="form-label">Gender</label>
    <select id="inputState" className="form-select"  value={values.gender} onChange={(e)=>setValues({...values,gender:e.target.value})} >
      <option selected disabled>Select  Gender</option>
      <option>Male</option>
      <option>Fe-male</option>
      <option>others</option> 
    </select>
  </div>

   <div className="col-md-6 " >
    <label for="img" className="form-label">Child Photo</label>
    <input type="file" className="form-control "   name="img"    /> <img className="w-50" src={`http://localhost:5058/upload/image/${values.img}`}  onChange={(e)=>setValues({...values,img:e.target.value})} alt="" />
  </div>

  <div className="col-md-6">
    <label for="dt" className="form-label">Child Photo</label>
    <input type="Date" className="form-control" name="dt" value={values.dt} onChange={(e)=>setValues({...values,dt:e.target.value})}  required/>
  </div>

<div className="col-md-12">
    <label for="issues" className="form-label">Issues</label>
    <input type="text" className="form-control" name="issues" placeholder="Issues" value={values.issues} onChange={(e)=>setValues({...values,issues:e.target.value})} required />
  </div>

<div className="col-md-6">
    <label for="Bgroup" className="form-label">Blood Group</label>
    <select  className="form-select"  value={values.bgroup} onChange={(e)=>setValues({...values,bgroup:e.target.value})}>
      <option selected disabled>Select Blood Group</option>
      <option>A+</option>
      <option>A-</option>
      <option>B+</option>
      <option>B-</option>
      <option>AB+</option>
      <option>AB-</option>
      <option>O+</option>
      <option>O-</option>
  
    </select>
  </div>

<div className="col-md-6 ">
    <label for="age" className="form-label">Age</label>
    <input type="number" className="form-control" name="age"  placeholder="age" value={values.age}  onChange={(e)=>setValues({...values,age:e.target.value})} required/>
  </div>

  <div className="col-md-6">
    <label for="phno" className="form-label">Phone no</label>
    <input type="number" className="form-control"  name="phno" placeholder="Phone Number" value={values.phno}  onChange={(e)=>setValues({...values,phno:e.target.value})} required />
  </div>


  <div className="col-md-6">
    <label for="languages" className="form-label">Languages</label>
    <select  className="form-select" value={values.lang} onChange={(e)=>setValues({...values,lang:lang.e.target.value})} >
      <option selected disabled> Select Language</option>
      <option>Tamil</option>
      <option>English</option>
      <option>Malayalam</option>
      <option>Telugu</option>
      <option>Marati</option>
      <option>Bengali</option>
    </select>
  </div>

 

  
  <div className="col-12 text-end">
    <button type="submit" className="btn btn-success ">change</button>
  </div>
</form>
        </div>
        </section>

)
}
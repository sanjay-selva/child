import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


export default function Funding(){


  const [date, setDate] = useState("");
  const [value,setUserid] = useState("");
  const uid=localStorage.getItem("uid")
  const[amout,setAmout] = useState("");
  const[purp,setPurp] = useState("");


  useEffect(()=>{
    const date= new Date().toISOString().split("T")[0];
    setDate(date);

     axios.get("http://localhost:5058/Funding/"+uid)
    
  .then(response=>{    
    setUserid(response.data[0].length>0);
  })

  .catch(err=>{
    console.log(err)
  })
   },[])

 function handleSubmit(e){
  e.preventDefault();
console.log(uid,amout,date,purp)
  axios.post('http://localhost:5058/fundingsave/',{uid,amout,date,purp})
 
.then(response=>{
  console.log(response);
  alert("Payment successfully")
})

.catch(err=>{
  console.log(err)
})
}

  

    return(
    
        
            <div className="funding">
                
  <div className="funding-page">
               
               
    
                    <h1 className=" text-light text-center"><img  src="/src/image/6.png" alt="" /> Funding </h1>
                    <h2 className=" text-light text-center mb-1">Child Orphanage</h2>
            

   <div className="funding-input">
                    <form action="" className="" onSubmit={handleSubmit} >
    <div className=" ">
    <label for="uid" className="form-label">I'd </label>
    <input type="text" className="form-control" name="uid" value={uid} onChange={((e)=>setUserid(e.target.value))}  placeholder="I'd"  readOnly />
  </div>

  
 <div className=" ">
    <label for="amount" className="form-label">Amount </label>
    <input type="text" className="form-control" name="amount" onChange={((e)=>setAmout(e.target.value))}  placeholder="Amount"  required />
  </div>

   <div className=" ">
    <label for="date" className="form-label">Date</label>
    <input id="dateInput" type="text" className="form-control" name="date"  value={date} onChange={((e)=>setDate(e.target.value))}  readOnly />
  </div>

   <div className="">
    <label for="purpose" className="form-label">Purpose</label>
    <textarea type="text" className="form-control" name="purpose" onChange={((e)=>setPurp(e.target.value))} placeholder="purpose"  required />
  </div>

  <div className="funding-btn">
    <button type="submit" className="btn btn-outline-primary" >Pay</button>
  </div>


                    </form>
 </div>
    
              </div>
 </div>
                  
                    
               
         
    )
}
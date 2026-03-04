import React, { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Child2(){ 

    const [uname,setUname]=useState("");
    const [pass,setPass]=useState("");
    const navigate=useNavigate();
   



    function loginSubmit(e){
      e.preventDefault()

      axios.post('http://localhost:5058/fundlogin/',{uname,pass})
        .then(response=>{
          console.log(response.data[0])
          console.log(response.data.length>0)

          if(response.data[0]){
            const userid=response.data[0].id;
            localStorage.setItem("uid",userid)
            navigate("/Funding/")
            alert("Can I sent you Funding page...!")
          }
          else
          {
            alert("The Process failed ...!")
          }
        })

        .catch(err=>{
          console.log(err)
        })
      
    }

    return(
         <section className="login" >
            <div className="login-form">

                <form className="row g-3 text-light p-4" onSubmit={loginSubmit}>
                <h3 className="text-center fw-bold text-light my-5 ">Child's Orphanage</h3>
                 <h3 className="text-center fw-bold text-light my-4 ">Sign to Move </h3>
                 <h4 className="text-center  text-light my-2 ">Welcome back! </h4>

  <div className="col-md-12 ">
    <label for="username" className="form-label">User Name</label>
    <input type="text" onChange={((e)=>setUname(e.target.value))} className="form-control"  placeholder="User Name" required/>
  </div>

  <div className="col-md-12 mb-3" >
    <label for="password" className="form-label">Password</label>
    <input type="password" onChange={((e)=>setPass(e.target.value))} className="form-control " placeholder="......." required />
  </div>



  <div className="col-12 text-end">
    <button type="submit" className="btn btn-primary ">Login</button>
  </div>
  </form>
  
            </div>
       </section>
    )
}
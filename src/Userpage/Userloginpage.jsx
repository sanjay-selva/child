import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Userloginpage(){

        const[uname,setUname]=useState("");
        const[pass,setPass]=useState("");
        const navagate=useNavigate()

        function handlesubmit(event){
            event.preventDefault()
            console.log(uname,pass)
            axios.post('http://localhost:5058/userlogin/',{uname,pass})
               
              .then(response=>{
                console.log(response.data)
                console.log(response.data.length>0)
                if(response.data.length>0 )
                {
                 localStorage.setItem('cid',response.data[0].id)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                  navagate('/Userchilddisplay/')
                }
                else
               { 
                alert("the statment is wrong")
              }

                
              })

              .catch(err=>{
                console.log(err+"front end")
              })
        
        }

    return(
         <section className="userlogin" >
            <div className="userlogin-form ">

                <form className="row g-3 text-light p-4" onSubmit={handlesubmit} >
                <h2 className="text-center fw-bold text-light">Child's Orphanage</h2>
                 <h3 className="text-center fw-bold text-light">User Login Use! </h3>
                 <h4 className="text-center  text-light my-2 ">Welcome back! </h4>

  <div className="col-md-12 ">
    <label  className="form-label">User Name</label>
    <input type="text" className="form-control"  placeholder="User Name" onChange={((e)=>setUname(e.target.value))} required/>
  </div>

  <div className="col-md-12 " >
    <label className="form-label">Password</label>
    <input type="password" className="form-control " placeholder="password" onChange={((e)=>setPass(e.target.value))} required />
  </div>

  

  

  <div className="col-12 text-end">
    <button type="submit" className="btn btn-primary ">Login</button>
  </div>
  </form>
  
            </div>
       </section>
    )
}
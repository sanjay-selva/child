import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Adminlogin(){

    const[uname,setUname]=useState("");
    const[pass,setPass]=useState("");
   const navigate=useNavigate();

    function handlesubmit(event){
        event.preventDefault();

       if(uname=="admin" && pass=="admin")
    {
       navigate('/Childmenu/')
    }
   else {
        alert("is worng")
    }
        
    }
    
    
  
    return(
        <section className="admin" >
            <div className="admin-form">

                <form className="row g-3 text-light p-4" onSubmit={handlesubmit} >
                <h3 className="text-center fw-bold text-light  ">Child's Orphanage</h3>
                 <h3 className="text-center fw-bold text-light  ">Admin use! </h3>
                 <h4 className="text-center  text-light my-2 ">Welcome back! </h4>

  <div className="col-md-12 ">
    <label for="username" className="form-label">User Name</label>
    <input type="text" className="form-control"  placeholder="User Name" onChange={((e)=>setUname(e.target.value))} required/>
  </div>

  <div className="col-md-12 " >
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control " placeholder="password" onChange={((e)=>setPass (e.target.value))} required />
  </div>

  

  

  <div className="col-12 text-end">
    <button type="submit" className="btn btn-primary ">Login</button>
  </div>
  </form>
  
            </div>
       </section>
    )
}
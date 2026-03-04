import React, { useState } from "react";
import axios   from "axios";
import { Link } from "react-router-dom";


export default function Userregisterpage(){

    const[cnam,setCnam]=useState("");
    const[phno,setPhno]=useState("");
    const[email,setEmail]=useState("");
    const[address,setAddress]=useState("");
    const[unam,setUnam]=useState("");
    const[pass,setPass]=useState("");

    function handlesubmit(event){
        event.preventDefault();
        axios.post('http://localhost:5058/useregister/',{cnam,phno,email,address,unam,pass})
    .then(response=>{
        console.log(response.data)
    })
    .catch(err=>
        console.log({message:+err+"Error in front end."}))
    }



    return(
        <section className="userregister bg-dark" id="">
        <div className="userregister-form ">
            
            <form className="row g-3 text-light p-4" onSubmit={handlesubmit}>
                 <h1 className="text-center fw-bold text-light  ">Child's Orphanage</h1>
                 <h3 className="text-center fw-bold text-light  ">Create an account ? </h3>
                 <h5 className="text-center text-light my-3 ">New User & New Adminer..! </h5>
    <div className="col-md-6 ">
    <label for="name" className="form-label">Name</label>
    <input type="text" onChange={((e)=>setCnam(e.target.value))} className="form-control"  placeholder="Name" required />
  </div>

 
  <div className="col-md-8">
    <label for="Phoneno" className="form-label">Phone no</label>
    <input type="number" onChange={((e)=>setPhno(e.target.value))} className="form-control" placeholder="Phone Number" required />
  </div>

  <div className="col-md-8">
    <label for="email" className="form-label">E-mail ID</label>
    <input type="email" onChange={((e)=>setEmail(e.target.value))} className="form-control" placeholder="E-mail" required />
  </div>
  <div className="col-md-4">
    <label for="Address" className="form-label">Address</label>
    <textarea type="text" onChange={((e)=>setAddress(e.target.value))} className="form-control"  required />
  </div>

 <div className="col-md-6 ">
    <label for="username" className="form-label">User Name</label>
    <input type="text" onChange={((e)=>setUnam(e.target.value))} className="form-control"  placeholder="User Name" required/>
  </div>



  <div className="col-md-6 " >
    <label for="password" className="form-label">Password</label>
    <input type="password" onChange={((e)=>setPass(e.target.value))} className="form-control " placeholder="Password" required />
  </div>

  

  <div className="col-md-6 text-center ">
     Already have an account? <Link to={`/Userloginpage/`} className="link fw-bolder ">Login</Link>
  </div>

  

  

  <div className="col-12 text-end">
    <button type="submit" className="btn  btn-outline-warning fw-bolder">Sign in</button>
  </div>
</form>
        </div>
        </section>
)}
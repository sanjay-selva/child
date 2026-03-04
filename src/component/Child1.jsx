import React from "react";
import { useState } from "react";

export default function Child1(){
    return(
        <section className="register" id="">
        <div className="register-form m-4">
            
            <form className="row g-3 text-light p-4">
                 <h1 className="text-center fw-bold text-light  ">Child's Orphanage</h1>
                 <h3 className="text-center fw-bold text-light  ">Create an account ? </h3>
                 <h5 className="text-center text-light my-3 ">New User & New Adminer..! </h5>
    <div className="col-md-6 ">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control"  placeholder="Name" required />
  </div>

  <div className="col-md-6 ">
    <label for="username" className="form-label">User Name</label>
    <input type="text" className="form-control"  placeholder="User Name" required/>
  </div>

  <div className="col-md-4">
    <label for="gender" className="form-label">Gender</label>
    <select id="inputState" className="form-select" required>
      <option selected disabled>Choose...</option>
      <option>Male</option>
      <option>Fe-male</option>
      <option>others</option>
    </select>
  </div>


  <div className="col-md-8">
    <label for="Phoneno" className="form-label">Phone no</label>
    <input type="number" className="form-control" placeholder="Phone Number" required />
  </div>

  <div className="col-md-8">
    <label for="email" className="form-label">E-mail ID</label>
    <input type="email" className="form-control" placeholder="E-mail" required />
  </div>
  <div className="col-md-4">
    <label for="date" className="form-label">Date of Brith</label>
    <input type="Date" className="form-control"  required />
  </div>


  <div className="col-md-6 " >
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control " placeholder="......." required />
  </div>

  <div className="col-md-6">
    <label for="confirmpwd" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" placeholder="......." required />
  </div>

  <div className="col-md-6 text-center ">
     Already have an account? <a href="Child2">Login</a> 
  </div>


  <div className="col-12 text-end">
    <button type="submit" className="btn btn-primary ">Sign in</button>
  </div>
</form>
        </div>
        </section>

)
}
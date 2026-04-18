import React from "react";


export default function Childmenu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
  <div className="container-fluid ">
     <a className="navbar-brand">
      <img src="/image/6.png" alt="Logo" width="60" height="45" className="d-inline-block align-text-center"/>
      <h1 className="d-inline-block align-text-top">Orphanage</h1>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
     aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <a className="nav-link " href="Childmainpage">Home</a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="Property">Property</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Adminpage">Admin</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="Child2">Funding</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Contact"> Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="About">About</a>
        </li>
        </ul>
         <div className="sign navbar-nav "> 
        
             <li><a href="Userregisterpage" className="btn btn-outline-warning" >Register</a></li>
       
                 
          
         <li>  <a href="Userloginpage" className="btn btn-outline-warning">Login</a> </li>  
     
       
            
    </div>
    </div>
  </div>
</nav>
    )
}
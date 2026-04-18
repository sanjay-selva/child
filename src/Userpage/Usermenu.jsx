import React from "react";


export default function Usermenu(){
   return(
    <section>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark " id="Usermenu">
  <div className="container-fluid"> 
    <a className="navbar-brand">
      <img src="/image/6.png" alt="Logo" width="60" height="45" className="d-inline-block align-text-center"/>
      <h1 className="d-inline-block align-text-top">Orphanage</h1>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
          <a className="nav-link" href="#">Request</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Adopated</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
    
    </ul>

    </div>
  </div>
</nav>
</section>
)
}
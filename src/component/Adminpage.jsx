import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin,faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import Childmenu from "./Childmenu";


export default function Adminpage(){
    return(
        <div className="">
            <Childmenu/>
            <section>
                <div className="adminage">
                  
                <b className="m-3">Admin Profile</b>
                </div>
                
                   
        <div className=" row g-0 admin-profile text-bg-dark">
            <h2 className="text-center m-3">Orphanage Chife's</h2>
        <div className="col-lg-3 col-sm-6 p-2">
                <div className="card" >
  <img src="/src/image/17.jpg" className="card-img-top w-100 p-2 my-4" alt="Loading" />
  <div className="card-body">
    <p className="card-text"><b>Ms:</b> M.Saiera </p>
    <p> <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>Kanyakumari</p>
    <p> <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>+91 8735454135</p>
  </div>
  </div>
</div>


<div className="col-lg-3 col-sm-6 p-2">
<div className="card " >
    
  <img src="/src/image/18.jpg" className="card-img-top w-100 p-2 my-4" alt="Loading" />
  <div className="card-body">
    <p className="card-text"><b>Ms:</b> T.Stilyas </p>
     <p> <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>Tirunelveli</p>
      <p> <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>+91 7534967542</p>
  </div>
</div>
</div>


<div className="col-lg-3 col-sm-6 p-2">
<div className="card" >
  <img src="/src/image/19.jpg" className="card-img-top p-2 w-100 my-4" alt="Loading" />
  <div className="card-body">
    <p className="card-text"><b>Mr:</b> E.S.Charles</p>
     <p> <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>Thoothukudi</p>
      <p> <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>+91 6989452054</p>
    <p></p>
  </div>
</div>
</div>

<div className="m-4 text-center">
  <a href="Child3" className="btn btn-outline-warning">Child Add</a>
</div>

</div>
            </section>
    </div>

    
    
    )
} 
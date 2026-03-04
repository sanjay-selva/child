import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot,faEnvelope,faSquarePhone } from "@fortawesome/free-solid-svg-icons"
import Childmenu from "./Childmenu"

export default function Contact(){
    return(
        <div className="">
<Childmenu/>
        <div className="contact">
            <div className="row ">
                 <h2>Contact us</h2>
                <div className="col-lg-7 contact-img m-3">
                    
   
 
 
    <h5 className="contact-tite text-warning fw-bold my-4">Send Your Message</h5>
    <p className="mb-4 text-center text-warning fw-bold">Receive messages from donors and <big className=" text-info">supporters using our Child Orphanage</big> contact form.</p>
        <div className="contact-form text-white row g-0">
    <div className=" m-4 col-lg-6 col-sm-5 ">
        <label for="" className="form-label">Name</label>
         <input type="text" className=" form-control" placeholder="Name" required/>
    </div>
   
   <div className=" mb-4 col-lg-7">
        <label for="" className="form-label">E-mail</label>
         <input type="email" className="form-control " placeholder="E-mail" required/>
    </div>

    <div className=" mb-4  col-lg-9">
        <label for="" className="form-label">Phone number</label>
         <input type="number" className="form-control " placeholder="phone no"  required/>
    </div>

    <div className=" mb-4">
        <label for="" className="form-label">Message</label>
         <textarea type="text" className="form-control " placeholder="Message..." required/>
    </div>
<div className="d-flex justify-content-center ">
    <button className="btn btn-outline-warning form-control">Send Message</button>
</div>
    
</div>
  </div>

     
  

                <div className=" contact-detail  my-3 col-lg-4">
                    <div className="row g-0">
                  <div class="card mb-3 col-lg-12">
  <div class="card-body">
   <FontAwesomeIcon icon={ faLocationDot} className="font-location"></FontAwesomeIcon> <b className="font-location">Address</b>
        <p className="text-secondary">Kanyakumari, Tamil Nadu 629702, India.</p>
   
  </div>
  </div>

  <div class="card mb-4 col-lg-12">
  <div class="card-body">
   <FontAwesomeIcon icon={ faEnvelope} className="font-email"></FontAwesomeIcon> <b className="email-font">E-mail</b>
        <p className="text-secondary">child123@gmail.com</p>
   
  </div>
  </div>

    <div class="card mb-4 col-lg-12">
  <div class="card-body">
   <FontAwesomeIcon icon={ faSquarePhone} className="font-phone"></FontAwesomeIcon> <b className="phone-font">TelePhone</b>
        <p className="text-secondary">+91 78541 30263</p>
   
  </div>
  </div>

  <div class="card mb-4 col-lg-12">
  <div class="card-body">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126377.98160124737!2d77.33263037203388!3d8.17129676345803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0dfc0ddc7b7%3A0x809a9e32a95d3ed1!2sNagercoil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1769958776201!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
  </div>
  </div>

</div>
            </div>
        </div>
        </div>
        </div>
    )
}
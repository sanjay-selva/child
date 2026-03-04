import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram,faSquareFacebook,faSquareTwitter,faSquareYoutube  } from "@fortawesome/free-brands-svg-icons"
import Childmenu from "./Childmenu";

export default function About(){
    return(
        
                
            <section id="about">
                <Childmenu/>
            <div className="about">
                <div className="row g-0">

                    <div className="col-lg-7 p-3 mt-5">
<div className="input-group">
  <input type="email" className="form-control email" placeholder="Email address to subscribe" />
  <button className="btn button  " type="button" >Button</button>
</div>
                    </div>


                    <div className="col-lg-4  mt-5">
                        <div className="about-icon">
                        <div className="abouticon">
                            <FontAwesomeIcon icon={faSquareInstagram}></FontAwesomeIcon>
                        </div>
                    <div className="abouticon">
                            <FontAwesomeIcon icon={faSquareFacebook}></FontAwesomeIcon>
                        </div>
                        <div className="abouticon">
                            <FontAwesomeIcon icon={faSquareTwitter}></FontAwesomeIcon>
                        </div>

                         <div className="abouticon">
                            <FontAwesomeIcon icon={faSquareYoutube}></FontAwesomeIcon>
                        </div>
                        </div>
                    </div>
                </div>

 
            </div>
            <div className="mt-5">
                <div className="row g-4">
                <div className="col-lg-3 ">
                   <h3 className="text-center text-white fw-bold ">Child</h3>
                   <ol>
                   <p className="text-center text-secondary">We care for children by offering food, shelter, education, and emotional support, responsible and confident individuals.</p>
                   <p className="text-center text-secondary">Children  society every  love, care, education, and a safe environment to grow with confidence and hope.</p>
                   </ol>
                </div>
                <div className="col-lg-3 mt-5">
                    <h3 className="text-center text-white fw-bold">About Us</h3>
                    <ol className="text-start text-secondary">
                   <ul className="mb-3">Child Welfare Programs</ul>
                    <ul className="mb-3">Education Support</ul>
                   <ul className="mb-3">Food & Shelter Care</ul>
                    <ul className="mb-3">Contact Us</ul>
                   <ul className="mb-3">Terms & Conditions</ul>
                   </ol>
                </div>
                <div className="col-lg-3 mt-5">
                    <h3 className="text-center text-white fw-bold">Orphanage On</h3>
                   <ol className="text-start text-secondary">
                   <ul > <b>Mon - Friday:</b></ul>
                   <ul className="mb-3">09.00 am to 07.00 pm</ul>

                   <ul> <b>Saturday:</b></ul>
                   <ul className="mb-3">10.00 am to 05.00 pm</ul>

                   <ul> <b>Vacation:</b></ul>
                   <ul className="mb-3">All Sunday is our vacation</ul>
                   </ol>
                </div>
                <div className="col-lg-3 mt-5">
                     <h3 className="text-center text-white">Contact</h3>
                     <ol className="text-start text-secondary ">
                   <ul className="mb-3">Kanyakumari, Tamil Nadu 629702, India.</ul>
                   <ul className="mb-3">child123@gmail.com</ul>
                   <ul className="mb-3">+91 78541 30263</ul>
                   <ul className="mb-3">+91 93877 57902</ul>
                   </ol>
                </div>
                </div>
            </div>
           
                
                <div className="about-bold">
                    <b>@Your Site Name, All right reserved.</b>
                
            </div>
            
</section>
           
        
    )
}
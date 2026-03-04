import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Childmenu  from "./Childmenu"


export default function Childdetail(){
    const[values,setvalues]=useState("");
    const{id}=useParams();
    console.log(id)
    useEffect(()=>{
        axios.get("http://localhost:5058/Childdetail/"+id)

        .then(response=>{
             setvalues(response.data[0])
            console.log(response.data[0])
            
        })
        .catch(error=>
            console.log("Error"+error)
        )
    },[])
    
    return(
       <section  >
        <Childmenu/>
        <div className="child-detail">
        
       <div className="container">
        <h2 className="fw-bold text-black text-center">Child Detail</h2>
        <div className="row childdetail">
            <div className=" col-sm-6 col-lg-4 ">
        <img src={`http://localhost:5058/upload/image/${values.img}`}  alt="Upload image" />
            </div>
             <div className="child-table col-sm-6  col-lg-4 ">
            <table>
                
                   <tr><th>Name : </th><td>{values.cname}</td></tr> 
                    <tr><th>I'd No : </th><td>{values.cid}</td></tr> 
                    <tr><th>Gender : </th><td>{values.gender}</td></tr> 
                    <tr><th>dt : </th><td>{values.dt}</td></tr> 
                    <tr><th>Issues : </th><td>{values.issues}</td></tr> 
                    <tr><th>Blood + : </th><td>{values.bgroup}</td></tr> 
                    <tr><th>Age : </th><td>{values.age}</td></tr> 
                    <tr><th>Phon No : </th><td>{values.phno}</td></tr> 
                    <tr><th>Language : </th><td>{values.lang}</td></tr> 
            </table>
             </div>

        </div>
</div>
</div>
</section>
    
    )
}
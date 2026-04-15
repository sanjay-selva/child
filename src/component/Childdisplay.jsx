import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Childmenu from "./Childmenu"

export default function Childdisplay(){

   const[values,setvalues]=useState([]);

   useEffect(()=>{
    axios.get("http://localhost:5058/")
    .then(response=>{
        setvalues(response.data)
        console.log(response.data[0])
    })
    .catch(err=>{
        console.log("Error is your file"+err)
   })
   },[]);

    return(
<div className="">
<Childmenu/>
        <div className="childcard">
           
          <div className="container">
             
                <div className="row g-4">
                   

                    <h1 className=" d-flex justify-content-center mt-5">Child Orphanage</h1>
                    <h4 className=" d-flex justify-content-center mb-2">Welcome back</h4>


                {
                    
                    values.map((data,i)=>(
               <div className=" col-lg-4  col-sm-6">
        <div className="card  p-3 " id={i} >
  <img className="card-img-top" src={`http://localhost:5058/upload/image/${data.img}`}  alt="Set image"/>
 
  <div className="card-body">
    
    <h5 className="card-title">{data.cname}</h5>
    <p className="card-text">{data.age}</p>

    <Link to={`/Childupdate/${data.id}`} className="btn m-3 btn-outline-success mx-3">Edit</Link>

    <Link to={`/Childdetail/${data.id}`}  className=" mx-2 btn btn-outline-warning">Child detail</Link>
  </div>
   </div>
   </div>
 ) )}
  </div>
  </div>
  
</div>
</div>
    )
}
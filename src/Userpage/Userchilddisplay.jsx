import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { data, Link } from "react-router-dom";

export default function Userchilddisplay(){

    const[values,setValues]=useState([]);
    const uid=localStorage.getItem('cid');
    useEffect(()=>{
      axios.get("http://localhost:5058/")
      
      .then(response=>{
         setValues(response.data)
        console.log(response.data[0])
       
      })
      .catch(err=>
        console.log(err)
      )
    },[])

    return(
        <div className="bg-dark text-light userchilddisplay">
        
                <h1 className="text-center mb-4 fw-bold">Child Orphanage </h1>
                <h3 className="text-center mb-4">Child Visite here</h3>
                <p className="text-center mb-4">Adoption gives a child a loving home,turning uncertainly it to belonging . Like a seed in fertile soil, care, education, and stablity let them grow strong. The bond spreads kindness,creating brighter futures for all. </p>
                
        <div className="d-fex  justify-content-center row row-cols-3 row-cols-md-4 g-4 ">
          {
            values.map((data,i)=>
        
        <div className="card   bg-dark  text-light m-4" id={i} >
  <img src={`http://localhost:5058/upload/image/${data.img}`} className="w-50 card-img-top" alt="Upload image"  />
  <div className="card-body">
    <h5 className="card-title">{data.cname}</h5>
   
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item bg-dark text-light">{data.cid}</li>
    <li className="list-group-item bg-dark text-light">{data.age}</li>
    
  </ul>
  <div className="card-body text-end">
    <Link className="btn btn-outline-warning " to={`/Userchilddetail/${data.id}`}>Viewdetail</Link>
  </div>
</div>

         ) }
</div>
</div>
    )
}
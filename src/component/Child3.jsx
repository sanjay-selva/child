import React from "react";
import { useState } from "react";
import axios from "axios"

export default function Child3(){

    const[cname,setCname]=useState("");
    const[cid,setCid]=useState("");
    const[gender,setGender]=useState("");
    const[file,setFile]=useState(null);
    const[dt,setDt]=useState("");
    const[issues,setIssues]=useState("");
    const[bgroup,setBgroup]=useState("");
    const[age,setAge]=useState("");
    const[phno,setPhno]=useState("");
    const[lang,setLang]=useState("");



    const handleFileChange=(e)=>{
      setFile(e.target.files[0]);
    };
    const handlesubmit=async(e)=>{
      e.preventDefault();

      let formData=new FormData();
      formData.append('file',file);
      console.log(file)
        try{

      const response=await axios.post('http://localhost:5058/uploading',formData,{

        headers:{
          "Content-Type":'multipart/form-data',
        },
      });
      console.log(response.data.message);
      console.log(response.data)
      let img=response.data.message
       axios.post("http://localhost:5058/childform/",{cname,cid,gender,img,dt,issues,bgroup,age,phno,lang})
       .then(response=>{
          console.log(response);
        })
        .catch(err=>console.log(err+"Error"))
      }
    catch(error){
      console.log('Error uploading file:'+error);
    }
    };
    return(
         <section className="profile" id="">
        <div className="profile-form m-4">
            
            <form className="row g-2  text-light p-4" onSubmit={handlesubmit}>
                 <h1 className="text-center fw-bold text-light  ">Child's Orphanage</h1>
                 <h3 className="text-center fw-bold text-light  ">Child Form ! </h3>
                 
    <div className="col-md-6 ">
    <label for="cname" className="form-label">Child Full Name</label>
    <input type="text" className="form-control" name="cname"  placeholder="Name" onChange={((e)=>setCname(e.target.value))} required />
  </div>

   <div className="col-md-3 ">
    <label for="Cid" className="form-label">Child Identification No</label>
    <input type="text" className="form-control" name="Cid"  placeholder="i'd no" onChange={((e)=>setCid(e.target.value))}  required/>
  </div>

  <div className="col-md-4">
    <label for="gender" className="form-label">Gender</label>
    <select id="inputState" className="form-select" onChange={((e)=>setGender(e.target.value))}  >
      <option selected disabled>Select  Gender</option>
      <option>Male</option>
      <option>Fe-male</option>
      <option>others</option>
    </select>
  </div>

   <div className="col-md-6 " >
    <label for="img" className="form-label">Child Photo</label>
    <input type="file" className="form-control "  name="img" onChange={((e)=>handleFileChange(e))} required />
  </div>

  <div className="col-md-6">
    <label for="dt" className="form-label">Date of Brith</label>
    <input type="Date" className="form-control" name="dt" onChange={((e)=>setDt(e.target.value))}  required/>
  </div>

<div className="col-md-12">
    <label for="issues" className="form-label">Issues</label>
    <input type="text" className="form-control" name="issues" placeholder="Issues" onChange={((e)=>setIssues(e.target.value))} required />
  </div>

<div className="col-md-6">
    <label for="Bgroup" className="form-label">Blood Group</label>
    <select  className="form-select" onChange={((e)=>setBgroup(e.target.value))} >
      <option selected disabled>Select Blood Group</option>
      <option>A+</option>
      <option>A-</option>
      <option>B+</option>
      <option>B-</option>
      <option>AB+</option>
      <option>AB-</option>
      <option>O+</option>
      <option>O-</option>
  
    </select>
  </div>

<div className="col-md-6 ">
    <label for="age" className="form-label">Age</label>
    <input type="number" className="form-control" name="age"  placeholder="age" onChange={((e)=>setAge(e.target.value))} required/>
  </div>

  <div className="col-md-6">
    <label for="phno" className="form-label">Phone no</label>
    <input type="number" className="form-control"  name="phno" placeholder="Phone Number" onChange={((e)=>setPhno(e.target.value))} required />
  </div>


  <div className="col-md-6">
    <label for="languages" className="form-label">Languages</label>
    <select  className="form-select" onChange={((e)=>setLang(e.target.value))}  >
      <option selected disabled> Select Language</option>
      <option>Tamil</option>
      <option>English</option>
      <option>Malayalam</option>
      <option>Telugu</option>
      <option>Marati</option>
      <option>Bengali</option>
    </select>
  </div>

 

  
  <div className="col-12 text-end">
    <button type="submit" className="btn btn-primary ">Submit</button>
  </div>
</form>
        </div>
        </section>
    )
}
import axios from "axios";
import  { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

import {Usermenu} from "react";


export default function Userchilddetail(){
    const [values,setValues]=useState([]);
    const {id}=useParams();
    const uid=localStorage.getItem('cid');
    const [st,setSt]=useState("");

    useEffect(()=>{
        axios.get('http://localhost:5058/Userchilddetail/'+id)
        .then(response=>{
            setValues(response.data[0])
           })
        .catch(err=>{
             console.log(err+"Error")
        }
        )


        axios.post('http://localhost:5058/',{uid,id})
        .then(response=>{
            console.log(response)

            if(response.data.length>0)
            {
                setSt('Request')
            }
        })
        .catch(err=>{
                console.log(err)
            })
        
    },[])
    

    function requestProcess(event){
            event.preventDefault()
               
             axios.post("http://localhost:5058/userchildrequest/",{uid,id})
            .then(response=>{
                console.log(response)
            })

            .catch(err=>{
                console.log(err)
            })



            axios.post("http://localhost:5058/userrequestcheck/",{uid,id})
            .then(response=>{
                console.log(response)
            if(response.data.length>0)
                {
                    setSt('Request')
                }
                
            else
                {
                    setSt('')
                }
            })

            .catch(err=>{
                console.log(err)
            })
           
        
    }
        
        
    return(
            
            <div className=" row userchilddetail">
                 <h1 className="text-center fw-bold text-dark ">Child's Orphanage</h1>
                 <h4 className="text-center fw-bold text-dark ">Child detail view (or) adopted</h4>
                 
                <div className="col-sm-12 col-lg-12  userimg">
                <img src={`http://localhost:5058/upload/image/${values.img}`} alt="upload image" />
                </div>
                <div className="col-sm-12 col-lg-12 usertable ">
                    <table>
                       <tbody>
                            <tr><th>Name :</th><td>{values.cname}</td></tr>
                            <tr><th>ID :</th><td>{values.id}</td></tr>
                            <tr><th>Student ID :</th><td>{values.cid}</td></tr>
                            <tr><th>Gender :</th><td>{values.gender}</td></tr>
                            <tr><th>Date :</th><td>{values.dt}</td></tr>
                            <tr><th>Issues :</th><td>{values.issues}</td></tr>
                            <tr><th>Blood :</th><td>{values.bgroup}</td></tr>
                            <tr><th>Age :</th><td>{values.age}</td></tr>
                            <tr><th>Phone No :</th><td>{values.phno}</td></tr>
                            <tr><th>Language :</th><td>{values.lang}</td></tr>
                           
                             
                            <tr><th>
                                {st==='Request' ?
                                '' 
                                :
                            <button type="button" className="btn btn-outline-dark m-2" onClick={requestProcess}>Request</button>
                                }
                            </th></tr>
                             
                            
                           
                           
                            </tbody>
                    </table>
                </div>
            </div>
       
      
    )
}
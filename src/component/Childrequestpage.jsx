import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function Childrequestpage(){

    const[values,setValues]=useState([]);
    

    useEffect(()=>{
        axios.get('http://localhost:5058/childrequestcheck/')
        .then(response=>{
           setValues(response.data)
            console.log(response.data[0])
        })

        .catch(err=>{
            console.log(err)
        })
    },[])


    function childAdopated(id,uid,cid){
        console.log(id,uid,cid)
        axios.put('http://localhost:5058/childadopted/'+id+'/'+uid+'/'+cid+'/')
            .then(response=>{
                console.log(response)
            })

            .catch(err=>{
                console.log("Error :"+err)
            })

    }
     

    return(
        <div className="">

            <div className=" table-responsive">

                <table  className="table table-bordered table-primary table-hover table-striped">

                    <thead>
                        <tr>
                            <th className="bg-black text-white">Id</th>
                            <th className="bg-black text-white">Request Name</th>
                            <th className="bg-black text-white">Phone No</th>
                            <th className="bg-black text-white">Address</th>
                            <th className="bg-black text-white">Child Name</th>
                            <th className="bg-black text-white">Age</th>
                            <th className="text-center bg-black text-white" >Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            values.map((data,i)=>

                        <tr id={i}>
                            <td>{i+1}</td>
                            <td>{data.name}</td>
                            <td>{data.phno}</td>
                            <td>{data.address}</td>
                            <td>{data.cname}</td>
                            <td>{data.age}</td>
                            <td className="d-flex justify-content-evenly" >
                                <button className="m-2 btn btn-outline-success" onClick={()=>childAdopated(data.id,data.uid,data.cid)}>Adopted</button>
                                <button className="m-2 btn btn-outline-danger">Cancel</button>
                            </td>
                            
                        </tr>
                         )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
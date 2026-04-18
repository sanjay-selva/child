import React from "react";
import Childmenu from "./Childmenu";

export default function Property(){
    return(
  
<div className="">
  <Childmenu/>
  <section id="house-detail">
   <div className=" row Property">
     {/* 1st image  */}

    
 
  <div className=" col-lg-5 col-sm-5 m-4 ">
    
      <h2 className="my-3">15 Year's of Running</h2>
  
<div class="card mb-3 text-bg-dark">

  <div class="row g-0">
    <div class="col-md-4 d-inline-block justify-content-center align-items-center w-100 h-100">
     <img src="src/image/11.jpg" className="card-img img-fluid rounded-start p-2" alt="Loading"/>
    </div>
    <div class="col-md-12">
      <div class="card-body">
       <h5 className="card-title text-white">Kanyakumari</h5>
        <p className="card-text ">Kanyakumari Orphanage is a caring home dedicated to supporting orphaned and underprivileged children. It provides a safe shelter, nutritious food, education, and emotional care. The orphanage focuses on building a bright future by encouraging learning, discipline, and moral values, helping children grow into confident and responsible individuals.</p>
         <p className="card-text text-center "><small>Last updated 1hr ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>

{/* 2 rd image    */}
          <div className="col-lg-5 col-sm-5 m-4 ">
            
              <h3 className="second-Property">Orphanage Property</h3>
              
              
        <div className="card  cad-img">
          
    
       <img src="/image/12.jpg" className="w-50 m-3" alt="Loading" />
    
    
      <div className="card-body ">
        <h5 className="card-title text-center">Tirunelveli</h5>
        <p className="card-text">Tirunelveli Orphanage is a compassionate home that cares for orphaned and needy children by providing a safe place to live, quality education, and proper guidance. The orphanage focuses on nurturing children with love, discipline, and moral values, helping them grow into confident and responsible members of society.</p>
        <p className="card-text  text-center"><small className="text-body-secondary">Last updated 1hr  ago</small></p>
      </div>
    </div>

 {/* 3 rd image  */}
    <div className="card  img-card">
        
       <img src="/image/10.jpg" className="w-50 m-3 " alt="Loading" />
    
    
      <div className="card-body">
        <h5 className="card-title text-center">Thoothukudi</h5>
        <p className="card-text">Thoothukudi Orphanage is a supportive home dedicated to the care and development of orphaned and underprivileged children. It provides a safe living environment, access to education, nutritious food, and emotional support, helping children grow with confidence, dignity, and hope for a better future.</p>
        <p className="card-text  text-center"><small className="text-body-secondary">Last updated 1hr ago</small></p>
      </div>
    </div>

    
    </div>
    </div>
   
  </section>
</div>

    
    )
}
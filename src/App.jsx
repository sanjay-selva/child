import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Child1 from './component/Child1'
import Child2 from './component/Child2'
import Child3 from './component/Child3'
import Childmenu from './component/Childmenu'
import Childdisplay from './component/Childdisplay'
import Childdetail from './component/Childdetail'
import Adminlogin from './component/Adminlogin'
import Childupdate from './component/Childupdate'
import Userchilddisplay from './Userpage/Userchilddisplay'
import Userchilddetail from './Userpage/Userchilddetal'
import Userloginpage from './Userpage/Userloginpage'
import Userregisterpage from './Userpage/Userregisterpage'
import Childrequestpage from './component/Childrequestpage'
import Usermenu from './Userpage/Usermenu'
import Childmainpage from './component/Childmainpage'
import Funding from './component/Funding'
import Orphanage from './component/Orphanage'
import Property from './component/Property'
import Adminpage from './component/Adminpage'
import Contact from './component/Contact'
import About from './component/About'


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/Child1" element={<Child1/>}></Route>
    <Route path="/Child2" element={<Child2/>}></Route>
    <Route path="/Child3" element={<Child3/>}></Route>
    <Route path="/Childmenu" element={<Childmenu/>}></Route>
    <Route path="/Childdisplay" element={<Childdisplay/>}></Route>
    <Route path="/Childdetail/:id" element={<Childdetail/>}></Route>
    <Route path="/Adminlogin" element={<Adminlogin/>}></Route>
    <Route path="/Childupdate/:id" element={<Childupdate/>}></Route>
    <Route path="/Userchilddisplay" element={<Userchilddisplay/>}></Route>
    <Route path="/Userchilddetail/:id" element={<Userchilddetail/>}></Route>
    <Route path="/Userloginpage" element={<Userloginpage/>}></Route>
    <Route path="/Userregisterpage" element={<Userregisterpage/>}></Route>
    <Route path="/Childrequestpage" element={<Childrequestpage/>}></Route>
    <Route path="/Usermenu" element={<Usermenu/>}></Route>
    <Route path="/Childmainpage" element={<Childmainpage/>}></Route>
    <Route path="/Funding" element={<Funding/>}></Route>
    <Route path="/Orphanage" element={<Orphanage/>}></Route>
    <Route path="/Property" element={<Property/>}></Route>
    <Route path="/Adminpage" element={<Adminpage/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/About" element={<About/>}></Route>


  </Routes>
  </BrowserRouter>
  )
}

export default App

import React from 'react'
import './SidebarOpt.css'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { SvgIconClassKey } from '@material-ui/core';



// function SidebarOpt(Text:string,Icon:any,Active:boolean) {
  function SidebarOpt({Text,Icon,Active}:any){
  
  const idakun:any=localStorage.getItem('Akun')
  const navigate = useNavigate();
  
  const pndahhal=(e:any)=>{
    if (Text==="Logout") {
      localStorage.clear()
      Cookies.remove('token')
      // window.location.href=("/")
      navigate("/")
    }else if(Text==="Setting"){
      
      
      navigate("/Setting")
      // window.location.href=("/Setting")
    }else if(Text==="Home"){
      localStorage.setItem('User',idakun)
      navigate("/Home")
      // window.location.href=("/Home")
    }else if(Text==="Profile"){
   
      localStorage.setItem('User',idakun)
      navigate("/Profile")
      // window.location.href=("/Profile")
      
    }

  }
  return (
    <div className={`sidebarOpt ${Active && "sidebarOpt_active"}`}>
    <Icon/>
      <h2 onClick={pndahhal}>{Text}</h2>
    </div>
  )
  
}

export default SidebarOpt

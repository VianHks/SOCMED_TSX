import React from 'react'
import '../SidebarOpt.css'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


function SidebarOptAdm({Text,Icon,Active}) {
    const navigate = useNavigate();
  
    const pndahhal=(e)=>{
      if (Text==="Logout") {
        localStorage.clear()
        Cookies.remove('token')
        navigate("/")
      
      }else if(Text==="Tweet"){
        
        
        navigate("/Admin/Tweet")
      }else if(Text==="Dashboard"){
       
        navigate("/Admin")
      }else if(Text==="User"){
        
        navigate("/Admin/User")
        
      }else if(Text==="Inactive User"){
        navigate("/Admin/Inactive")
      }
  
    }
    return (
      <div value={1} className={`sidebarOpt ${Active && "sidebarOpt_active"}`}>
        <Icon />
        <h2 onClick={pndahhal}>{Text}</h2>
      </div>
    )
   
}

export default SidebarOptAdm

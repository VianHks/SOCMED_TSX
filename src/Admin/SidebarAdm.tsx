import React from 'react'
import { useState } from 'react';
import '../Sidebar.css'
import SidebarOpt from './SidebarOptAdm'
import HomeIcon from '@material-ui/icons/Home'
import Profile from '@material-ui/icons/PermIdentity'
import setting from '@material-ui/icons/Twitter'
import inactive from '@material-ui/icons/PersonAddDisabled'
import Logout from '@material-ui/icons/ExitToApp'

// import Twlogo from '@material-ui/icons/Twitter'
import { Twitter } from '@material-ui/icons'


function Admin() {
    const [vpost, setVpost] = useState([]); 
    const fetchData = () => {
        return fetch("http://localhost:5000/settusr/"+localStorage.getItem("User").toString())
            .then((response) => response.json())
            .then(x => {
              
                setVpost(x)
            })
      }
    
    return (
        <div className='sidebar_utama'>

     
  
        <SidebarOpt
        Text="Dashboard"
        Icon={HomeIcon}
        Active={false}
        />
  
        <SidebarOpt 
        Text="User"
        Icon={Profile}
        Active={false}
        />
        
        <SidebarOpt 
        Text="Tweet"
        Icon={setting}
        Active={false}
        />

        <SidebarOpt 
        Text="Inactive User"
        Icon={inactive}
        Active={false}
        />
  
        <SidebarOpt
        Text="Logout"
        Icon={Logout}
        Active={false}
        />
          
       
      </div>
  )
}

export default Admin

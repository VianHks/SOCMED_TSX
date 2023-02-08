import React from 'react'
import SidebarOpt from './SidebarOpt'
import HomeIcon from '@material-ui/icons/Home'
import Profile from '@material-ui/icons/PermIdentity'
import setting from '@material-ui/icons/Settings'
import Logout from '@material-ui/icons/ExitToApp'
import './Sidebar.css'
import { Button } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'
import { SidebarOptProps } from './Interface/SideBarInterface'



function Sidebar() {
  
  return (
    <div className='sidebar_utama'>

      <SidebarOpt 
      Text=""
      Icon={Twitter}
      Active={true}
      />

      <SidebarOpt
      Text="Home"
      Icon={HomeIcon}
      Active={true}
      />

      <SidebarOpt 
      Text="Profile"
      Icon={Profile}
      Active={false}
      />
      
      <SidebarOpt 
      Text="Setting"
      Icon={setting}
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

export default Sidebar

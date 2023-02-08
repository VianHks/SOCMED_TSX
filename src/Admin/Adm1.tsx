import React from 'react'
// import Sidebar from '../Sidebar'
import Dtainactive from './Dtainactive'
import Dtatw from './Dtatw'
import Dtausr from './Dtausr'
import Mstpopussr from './Usr/Mstpopussr'
import Admin from './SidebarAdm'
import './Adm1.css'
import Nick from './Usr/Nick'
import Flwr from './Usr/Flwr'
import Usrnme from './Tweet/Usrnme'
import Tweet from './Tweet/Tweet'
import Ttllikes from './Tweet/Ttllikes'


function Adm1({usr,nicknme,flwr}:any) {
  return (
    <div className='App'>
      <Admin/>
      <img src="" alt=""/>
<div className="containeradmin">
    <div className="header">
        

    </div>
    
    <div className="content">
        <div className="cards">
            <Dtausr/>
            <Dtatw/>
            <Dtainactive/>
           
        </div>
        <div className="content-2">
            <div className="payments">
                <div className="title">
                    <h2>Most Popular Tweet</h2>
                    
                </div>
                <table id="getpoptw">
                    <tr>
                        <th>Username</th>
                        <th>Tweet</th>
                        <th>Total Likes</th>
                    </tr>
                   
                    <td><Usrnme/></td>
                    <td><Tweet/></td>
                    <td><Ttllikes/></td>
                </table>
            </div>                
            <div className="students">
                <div className="title">
                    <h2>Popular User</h2>
            
                </div>
                <table id="getusr">
                
                <tr>
                    <th>Username</th>
                    <th>Nickname</th>
                    <th>Followers</th>
                                
                </tr>

                <tr>
                <td><Mstpopussr/></td>
                <td><Nick/></td>
                <td><Flwr/></td>
                </tr>
           
                </table>
        
        
            </div>

        </div>
        
</div>
</div>
    </div>
  )
}

export default Adm1

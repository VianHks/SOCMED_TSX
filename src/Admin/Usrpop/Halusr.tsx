import React from 'react'
import Admin from '../SidebarAdm'
import '../Adm1.css'
import Tbleusr from './Tbleusr'
import Tblenme from './Tblenme'
import Tblenick from './Tblnick'
import Tblelastlgn from './Tbllastlgn'
import Tblcrtdte from './Tblcrtdte'

function Halusr() {
  return (
    <div className='App'>
      <Admin/>
      <div className="contentadmin">
            
      <div className="contentadmin-2">
          <div className="payments__usr">
              <div className="title">
                  <h2>Data User</h2>
                 
              </div>
              <table id="getpoptw">
                  <tr>
                     
                      <th>Id User</th>
                      <th>Username</th>
                      <th>Nickname</th>
                      <th>Last Login</th>
                      <th>Create Date</th>
                  </tr>
                  
                  <td><Tbleusr/></td>
                  <td><Tblenme/></td>
                  <td><Tblenick/></td>  
                  <td><Tblelastlgn/></td>
                  <td><Tblcrtdte/></td>
                  
              </table>
          </div>                
          

      </div>
  </div>
    </div>
  )
}

export default Halusr

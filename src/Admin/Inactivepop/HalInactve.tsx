import React from 'react'
import Admin from '../SidebarAdm'
import '../Adm1.css'
import TblUsridinactv from './TblUsridinactv'
import TblUsrnmeinactve from './TblUsrnmeinactve'
import TblNicknmeinactive from './TblNicknmeinactive'
import TblLmahri from './TblLmahri'


function HalInactve() {
  return (
    <div className='App'>
    <Admin/>

            <div className="contentadmin-2">
                <div className="Inactive__usr">
                    <div className="title">
                        <h2>Data Inactive User</h2>
                    </div>
                    <table id="getpoptw">
                        <tr>
                            
                            <th>User ID</th>
                            <th>Username</th>
                            <th>Nickname</th>
                            <th>Inactive(Days)</th>
                            
                            
                        </tr>
                        <td><TblUsridinactv/></td>
                        <td><TblUsrnmeinactve/></td>
                        <td><TblNicknmeinactive/></td>
                        <td><TblLmahri/></td>
                        
                    </table>
                </div>                
                

            </div>
        </div>            

  )
}

export default HalInactve

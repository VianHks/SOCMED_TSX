import React from 'react'
import Admin from '../SidebarAdm'
import TblIdTweet from './TblIdTweet'
import '../Adm1.css'
import TblUsrTw from './TblUsrTw'
import TblTweet from './TblIdTweet'
import TblPstDte from './TblPstDte'
function Haltw() {
  return (
    <div className='App'>
    <Admin/>
    <div className="contentadmin-2">
                <div className="payments__usr">
                    <div className="title">
                        <h2>Data Tweet</h2>
                    </div>
                    <table id="getpoptw">
                        <tr>
                          
                            <th>Id Tweet</th>
                            <th>Username</th>
                            <th>Tweet</th>
                            <th>Post Date</th>
                            
                        </tr>
                        <td><TblIdTweet/></td>
                        <td><TblUsrTw/></td>
                        <td><TblTweet/></td>
                        <td><TblPstDte/></td>
                    
                    </table>
                </div>                
                

            </div>
    </div>
  )
}

export default Haltw

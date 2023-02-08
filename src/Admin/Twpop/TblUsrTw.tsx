import React from 'react'
import { useState,useEffect } from 'react';
import '../Adm1.css'
import { Usrnme3Props } from '../../Interface/AdminIntrfce';

function TblUsrTw() {
    const [vpost, setVpost] = useState<Usrnme3Props[]>([]); 

    const fetchData = () => {
        return fetch("http://localhost:5000/gettalltwindx")
            .then((response) => response.json())
            .then(x => {
              
                setVpost(x)
            })
      }
      useEffect(() => {
        fetchData()
      },[])
      const posting = vpost.map(y => {
        return (
            
          
         <div>
          
            <td>{y.usrnme}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
}

export default TblUsrTw

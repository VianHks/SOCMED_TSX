import React from 'react'
import { useState,useEffect } from 'react';
import '../Adm1.css'
import { Nicknme2Props } from '../../Interface/AdminIntrfce';

function Tblenick() {
    const [vpost, setVpost] = useState<Nicknme2Props[]>([]); 

    const fetchData = () => {
        return fetch("http://localhost:5000/getallusindx")
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
          
            <td>{y.nickname}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
    
}

export default Tblenick

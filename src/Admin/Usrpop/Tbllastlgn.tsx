import React from 'react'
import { useState,useEffect } from 'react';
import '../Adm1.css'
import { LastLoginProps } from '../../Interface/AdminIntrfce';

function Tblelastlgn() {
    const [vpost, setVpost] = useState<LastLoginProps[]>([]); 

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
          
            <td>{y.Last}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
    
}

export default Tblelastlgn

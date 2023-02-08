import React from 'react'
import { useState,useEffect } from 'react';
import '../Adm1.css'
import { UsrdProps } from '../../Interface/AdminIntrfce';

function TblUsridinactv() {
    const [vpost, setVpost] = useState<UsrdProps[]>([]); 

    const fetchData = () => {
        return fetch("http://localhost:5000/inctveuser")
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
          
            <td>{y.usrid}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
}

export default TblUsridinactv

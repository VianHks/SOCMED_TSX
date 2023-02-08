import React from 'react'
import { useState,useEffect } from 'react';
import '../Adm1.css'
import { Nick2Props } from '../../Interface/AdminIntrfce';

function TblNicknmeinactive() {
    const [vpost, setVpost] = useState<Nick2Props[]>([]); 

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
          
            <td>{y.nick}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
}

export default TblNicknmeinactive

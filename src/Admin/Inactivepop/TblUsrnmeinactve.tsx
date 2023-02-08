import React from 'react'
import { useState,useEffect } from 'react';
import '../Adm1.css'
import { Usrnme2Props } from '../../Interface/AdminIntrfce';

function TblUsrnmeinactve() {
    const [vpost, setVpost] = useState<Usrnme2Props[]>([]); 

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
          
            <td>{y.usrname}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
}

export default TblUsrnmeinactve

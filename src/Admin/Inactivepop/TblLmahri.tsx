import React from 'react'
import { useState,useEffect } from 'react';
import '../Adm1.css'
import { LamaHariProps } from '../../Interface/AdminIntrfce';

function TblLmahri() {
    const [vpost, setVpost] = useState<LamaHariProps[]>([]); 

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
          
            <td>{y.LamaHari}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
}

export default TblLmahri

import React from 'react'
import { useState,useEffect } from 'react';
import '../Adm1.css'
import { CrtdateProps } from '../../Interface/AdminIntrfce';
function Tblcrtdte() {
    const [vpost, setVpost] = useState<CrtdateProps[]>([]); 

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
          
            <td>{y.crt}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
    
}

export default Tblcrtdte

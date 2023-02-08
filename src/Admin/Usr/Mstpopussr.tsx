import React from 'react'
import '../Adm1.css'
import { MstpopUsrProps } from '../../Interface/AdminIntrfce';
import { useState,useEffect } from 'react';

function Mstpopussr() {
    const [vpost, setVpost] = useState<MstpopUsrProps[]>([]); 

    const fetchData = () => {
        return fetch("http://localhost:5000/popusr")
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
            
          
         <div className='isitd'>
          
                    <td>{y.Usernme}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
    
}

export default Mstpopussr

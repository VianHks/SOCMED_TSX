import React from 'react'
import '../Adm1.css'
import { UsrFlwrProps } from '../../Interface/AdminIntrfce';

import { useState,useEffect } from 'react';

function Flwr() {
    const [vpost, setVpost] = useState<UsrFlwrProps[]>([]); 

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
          
                    <td>{y.Followers}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
    
}

export default Flwr

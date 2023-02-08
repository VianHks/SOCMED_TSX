import React from 'react'
import { useState,useEffect } from 'react';
import { MstpopUsrProps } from '../../Interface/AdminIntrfce';

function Usrnme() {
    const [vpost, setVpost] = useState<MstpopUsrProps[]>([]); 

    const fetchData = () => {
        return fetch("http://localhost:5000/poptweet")
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

export default Usrnme

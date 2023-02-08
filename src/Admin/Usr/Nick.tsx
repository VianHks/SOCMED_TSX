import React from 'react'
import '../Adm1.css'
import { NickProps } from '../../Interface/AdminIntrfce';
import { useState,useEffect } from 'react';

function Nick() {
    const [vpost, setVpost] = useState<NickProps[]>([]); 

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
          
                    <td>{y.Nickname}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
    
}

export default Nick

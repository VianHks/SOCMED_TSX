import React from 'react'
import { useState,useEffect } from 'react';
import { IsiPostProps } from '../../Interface/AdminIntrfce';

function Tweet() {
    const [vpost, setVpost] = useState<IsiPostProps[]>([]); 

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
          
          <td>{y.IsiPost}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
    
}

export default Tweet

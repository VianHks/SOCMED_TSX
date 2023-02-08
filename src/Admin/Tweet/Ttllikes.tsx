import React from 'react'
import { useState,useEffect } from 'react';
import { LikesCountProps } from '../../Interface/AdminIntrfce';

function Ttllikes() {
    const [vpost, setVpost] = useState<LikesCountProps[]>([]); 

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
          
                    <td>{y.LikesCount}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
    
}

export default Ttllikes

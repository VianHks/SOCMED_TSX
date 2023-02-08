import React from 'react'
import { useState,useEffect } from 'react';
import '../Adm1.css'
import { TweetProps } from '../../Interface/AdminIntrfce';

function TblTweet() {
    const [vpost, setVpost] = useState<TweetProps[]>([]); 

    const fetchData = () => {
        return fetch("http://localhost:5000/gettalltwindx")
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
          
            <td>{y.Tweet}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
}

export default TblTweet

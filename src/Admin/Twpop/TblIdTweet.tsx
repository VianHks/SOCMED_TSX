import React from 'react'
import { useState,useEffect } from 'react';
import '../Adm1.css'
import { IdPostProps } from '../../Interface/AdminIntrfce';

function TblIdTweet() {
    const [vpost, setVpost] = useState<IdPostProps[]>([]); 

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
          
            <td>{y.idpost}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
}

export default TblIdTweet

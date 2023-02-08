import React from 'react'
import { useState,useEffect } from 'react';
import '../Adm1.css'
import { PostDteProps } from '../../Interface/AdminIntrfce';


function TblPstDte() {
    const [vpost, setVpost] = useState<PostDteProps[]>([]); 

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
          
            <td>{y.postdte}</td>
                                
         </div>
         
          )

      })
      return(
        <div>{posting}</div>
      )
}

export default TblPstDte

import React from 'react'
import './Whoto.css'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { WhotoProps } from '../Interface/PostdetailIntrfce';



function Whoto() {
    const navigate=useNavigate()
    const[vpost,setVpost]=useState<WhotoProps[]>([])
    // const[idflow,setIdflow]=useState('')
    
    const handlepndhal=(e:any)=>{
      const btnId=e.currentTarget.id
      
      localStorage.setItem('User',btnId)
      navigate('/Profile')
  }
    const handleflow = (e:any) => {
      let iduser=localStorage.getItem("User")  
      const btnId=e.currentTarget.id
      var myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "usrid": iduser,
        "followerid": btnId
      });

      var requestOptions:any = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:5000/flwr", requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.Message === "Gagal Mengikuti") {
                alert("Follow Belum Berhasil,Terjadi Kesalahan Pada Server");
                  
            }else{
              alert("Berhasil Follow")
              fetchData()
            }

            })
        
      }

    const fetchData=() => {
        let usridfecth=localStorage.getItem("User")
        return fetch("http://localhost:5000/whoto/"+usridfecth)
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
            
            <div className="who-to-follow__block">
            <img
            className="who-to-follow__author-logo"
            src={`https://i.pravatar.cc/150?img=${y.usrid}`}/>
          <div className="who-to-follow__content">
            <div>
                <div id={y.usrid} onClick={(id)=>{handlepndhal(id)}} className="who-to-follow__author-name">
                {y.usrname}
                </div>
                <div className="who-to-follow__author-slug">
                {y.nick}
                </div>
            </div>
                
                <div id={y.usrid} onClick={(id)=>{handleflow(id)}} className="who-to-follow__button">
                Follow
                </div>
                
          </div>
        
                
            </div>
        

            )
    })  
    
  return (
    <div>{posting}</div>
  )
}

export default Whoto;

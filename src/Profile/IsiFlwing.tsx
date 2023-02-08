import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { IsiFlwingProps } from '../Interface/ProfileIntrfce';

function IsiFlwing() {
    const navigate=useNavigate()
    const [vpost, setVpost] = useState<IsiFlwingProps[]>([]);
    
    const handlepndhal=(e:any)=>{
      const btnId=e.currentTarget.id
      
      localStorage.setItem('User',btnId)
      navigate('/Profile')
    }
    const handleflow=(e:any)=>{
      const btnId=e.currentTarget.id
      let idusr=localStorage.getItem("User")
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "usrid": parseInt(btnId),
        "followerid": idusr
      });

      var requestOptions:any = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      fetch("http://localhost:5000/flwrdlte", requestOptions)
              .then(response => response.json())
              .then(result => {
                if (result.Message === "Unfollow Berhasil") {
                  alert("Berhasil Unfollow");
                  fetchData()
                  // navigate('/Profile/Following')  
              }else{
                alert("Unfollow Belum Berhasil,Kesalahan Pada Server");
                    
              }
      })

    }

    
    const fetchData = () => {
        let idakun=localStorage.getItem('Akun')
        return fetch("http://localhost:5000/getflwing/"+idakun)
            .then((response) => response.json())
            .then(x => {
                setVpost(x)
            })
      }
  
      useEffect(() => {
        fetchData();
      }, [])
      const posting = vpost.map(y => {
          return (
              <div>
              <ul id='friend-list'>
                <li className='friend'>
                  <img src={`https://i.pravatar.cc/150?img=${y.usrid}`} alt=''/>
                  <div id={y.usrid} onClick={(id)=>{handlepndhal(id)}} className='name'>
                    {y.Nickname}
                  </div>
                  <div id={y.usrid} onClick={(id)=>{handleflow(id)}} className="who-to-follow__buttonfl">
                  Unfollow
                  </div>
                </li>
                
            </ul>
              </div>
        )
      })
      return(
          <div>{posting}</div>
      )
  }
  
export default IsiFlwing

import React from 'react'

import './Postpf.css'
import { useState,useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import './Profile.css'
import Flowerlist from './Flowerlist'
import { HalflwingProps } from '../Interface/ProfileIntrfce'


function Halflwrflwing() {
  const [vpost, setVpost] = useState<HalflwingProps[]>([]);
  const [show,setShow]=useState(false);
  const hndleShow=()=>setShow(true)
  const[btnflow,setBtnflow]=useState('Follow')
  const [btnshow,setBtnshow]=useState(false);
  const navigate=useNavigate();
  
  // console.log(btnflow)
  const pndhflower=()=>{
    navigate('/Profile/Followers')
  }
  const pndhflwing=()=>{
    console.log("Pndhfolowing")
    navigate('/Profile/Following')
  
  }

  const cekflow = () => {
    let idusr=localStorage.getItem("User")
    let idakun=localStorage.getItem("Akun")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "usrid": idakun,
      "followerid": idusr
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
                
          }else if (result.Message ==="Mengikuti"){
            alert("Berhasil Follow")
            fetchData()
          }else if(result.Message ==="Sudah Pernah Follow"){
            alert("Anda sudah mengikuti akun ini")
            setBtnflow('Unfollow')  
          }

          })
      
    }


  const fetchData = () => {
    let idusr=localStorage.getItem("User")
    let idakun=localStorage.getItem("Akun")
      return fetch("http://localhost:5000/getusrbyid/"+idusr)
          .then((response) => response.json())
          .then(x => {
            if(idusr===idakun){
              setBtnshow(false)
        
            }else{
              setBtnshow(true)
         
            }
              setVpost(x)
          })
  }

  useEffect(() => {
      fetchData();
  }, [])
  
    
  const posting = vpost.map(y => {
    return (
      
      <div className='bodyprofile'>
      <div className="header__wrapper">
      <header></header>
      <div className="cols__container">
        <div className="left__col">
          <div className="img__container">
            <img src="https://i.pravatar.cc/150?img2" alt="Anna Smith" />
            <span></span>
          </div>
          <h2 id="nmapf">{y.Nickname}</h2>
          <p>UX/UI Designer</p>
          <p>{y.usrname}</p>
             
          <ul className="about">
          <IconButton onClick={hndleShow}>
          <li><span onClick={pndhflower} className='flwr'>{y.Follower}</span>Followers</li>
          </IconButton>
            <IconButton>
            <li><span onClick={pndhflwing} className='flwing'>{y.Following}</span>Following</li>
            </IconButton>
            <li><span>12</span>Message</li>
          </ul>
  
          <div className="contentpf">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
              erat volutpat. Morbi imperdiet, mauris ac auctor dictum, nisl
              ligula egestas nulla.
            </p>
  
            <ul>
              <li><i className="fab fa-twitter"></i></li>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-dribbble"></i>
            </ul>
          </div>
        </div>
        <div className="right__col">
          <nav>
              <ul>
              
              </ul>
              { btnshow && <button onClick={cekflow}>{btnflow}</button>}
          </nav>
  
          <div className="photos">
         
         <Flowerlist/>
          
          </div>
        </div>
      </div>
    </div>
  
      </div>
    )

  })
  return(
    <div>{posting}</div>
  )
}

export default Halflwrflwing

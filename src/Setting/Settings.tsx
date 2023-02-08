import React from 'react'
import './Settings.css'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingProps } from '../Interface/SettingsIntrfce';

function Settings() {
  const [vpost, setVpost] = useState<SettingProps[]>([]); 
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();


  const handleChangeNick = (e:any) => {
    setNick(e.target.value);
  }
  const handleChangePass = (e:any) => {
    setPassword(e.target.value);
  }

  //GET DT USER
  const fetchData = () => {
    let idusr=localStorage.getItem("User")
    return fetch("http://localhost:5000/settusr/"+idusr)
        .then((response) => response.json())
        .then(x => {
          
            setVpost(x)
        })
  }

  const submitForm=(e:any)=>{
    let idusr=localStorage.getItem("User")
    e.preventDefault()

    var myHeaders = new Headers();
    
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "password": password.toString(),
      "nickname": nick.toString()
    });
    
    var requestOptions:any = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    // console.log(nick,password)
    
    
    fetch("http://localhost:5000/updtusr/"+idusr, requestOptions)
    .then((response) => response.json())
    .then((data) => {
    
      
      if(data.Message==='Update data success'){
            
        alert("Update User Berhasil,Nickname & Password berhasil diubah")
        fetchData()
      }else{
        alert("Update User Belum Berhasil")
        
      }
      
    });
  }
  
  useEffect(() => {
    fetchData()
  },[])
   
  const posting = vpost.map(y => {
    return (
      <div className='bodysetting'>
      <div className="container">
    <form method="post" autoComplete="on" onSubmit={(e) => submitForm(e)}>
      
      <div className="box">
        <label htmlFor="firstName" className="fl fontLabel"> Username</label>
        <div className="new iconBox">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className="fr">
            <input  type="text" name="firstName" placeholder={y.usrname}
            className="textBox" autoFocus={true} disabled/>
        </div>
        <div className="clr"></div>
      </div>
    
      <div className="box">
        <label htmlFor="secondName" className="fl fontLabel"> NickName </label>
        <div className="fl iconBox"><i className="fa fa-user" aria-hidden="true"></i></div>
        <div className="fr">
            <input type="text" onChange={handleChangeNick}
            placeholder={y.nick} className="textBox"/>
            
        </div>
        <div className="clr"></div>
      </div>

      
      <div className="box">
        <label htmlFor="password" className="fl fontLabel"> Old Password</label>
        <div className="fl iconBox"><i className="fa fa-key" aria-hidden="true"></i></div>
        <div className="fr">
            <input type="Password" required name="password" placeholder={y.pass} className="textBox" disabled/>
        </div>
        <div className="clr"></div>
      </div>
      <div className="box">
      <label htmlFor="password" className="fl fontLabel"> New Password</label>
      <div className="fl iconBox"><i className="fa fa-key" aria-hidden="true"></i></div>
      <div className="fr">
          <input type="Password"onChange={handleChangePass} required name="password" placeholder="Password" className="textBox"/>
      </div>
      <div className="clr"></div>
    </div>
      
      <div className="box">
          <input type="Submit" name="Submit" className="submit" value="Save"/>
      </div>
      
    </form>
</div>
</div>
  
    )

  })

    return(
      <div>{posting}</div>  
    )
  }

export default Settings;
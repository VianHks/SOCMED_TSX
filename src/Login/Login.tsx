import React from "react";
import * as Components from './Components'
import './LoginPage.css'
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [signIn, toggle] = React.useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[name,setName]=useState('');
    const navigate = useNavigate();

    const setCookie=(cName:string,cValue:any,expDays:any)=>{
      let date = new Date();
      date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }
    
    const handleChangeEmail = (e:any) => {
      setEmail(e.target.value);
    }

    const handleChangeName = (e:any) => {
        setName(e.target.value);
    }

    const handleChangePassword = (e:any) => {
      setPassword(e.target.value);
    }

  useEffect(() => {
      if (localStorage.getItem('User')) {
        navigate("/Home")
     
      }else if(localStorage.getItem('Admin')){
        navigate("/Admin")
      }
  })

  const clickHandler = () => {
 
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + btoa(email.toString() + ":" + password.toString()));
   
    
    var requestOptions:any = {
      method: "POST",
      headers: myHeaders,
      credential: "include",
      redirect: "follow",
    };

    fetch("http://127.0.0.1:5000/f_login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
         
          if(result.message==='token succes'){
            if(email.toString()==='ADMIN'){
              localStorage.setItem('Admin', result.id)
              setCookie('token', result.token, 1);
              alert("Login Berhasil")
  
            }else{
              localStorage.setItem('User', result.id)
              localStorage.setItem('Akun',result.id)
              setCookie('token', result.token, 1);
              alert("Login Berhasil")
  
            }
            
          }else{  
            alert("GAGAL MASUK, Username/Password Salah")
          }

        })
        
        .catch((error) => {
          alert(error.message)
          console.log(error) 
        });
    }
    //SignUP
    const clickSignUp = () => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YW5kcm86MTIzNDU2Nzg=");
        myHeaders.append("Content-Type", "application/json");
  
        let raw = JSON.stringify({
          usrname: email.toString(),
          password: password.toString(),
          nickname: name.toString(),
        });
  
        let requestOptions:any = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        console.log(raw)
        if (name === "" || password === "" || email === "") {
            // A field can not be empty
            alert("A field can not be empty.");
          } else {
            fetch("http://127.0.0.1:5000/usr", requestOptions)
            .then((response) => response.json())
            .then((result) => {
             
              if(result.Message==='Simpan Data User Berhasil'){
                
                alert("SignUp Berhasil")
                
              }else{
                console.log(result.Message)
                alert("SignUp Belum Berhasil,Kesalahan ada pada Data Fetching")
                
              }
    
            })
            .catch((error) => {
                console.log(name,email,password)
                alert(error.Message)
              
            });
          }
        
    }    

     return(
<div className="BdyLogin">
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' onChange={handleChangeName} placeholder='Name' />
                     <Components.Input type='text' onChange={handleChangeEmail} placeholder='Email' />
                     <Components.Input type='password' onChange={handleChangePassword} placeholder='Password' />
                     <Components.Button onClick={clickSignUp}>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='text' onChange={handleChangeEmail} placeholder='Email' />
                      <Components.Input type='password' onChange={handleChangePassword} placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button onClick={clickHandler}>Sign In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>
                <div className="kiri">
                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>
                </div>
                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
      </div>
     )

}
export default Login;
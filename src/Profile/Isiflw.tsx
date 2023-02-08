import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { IsiFlwProps } from '../Interface/ProfileIntrfce';

function IsiFlw() {
  const navigate=useNavigate()
  const [vpost, setVpost] = useState<IsiFlwProps[]>([]);

    const handlepndhal=(e:any)=>{
      const btnId=e.currentTarget.id
      
      localStorage.setItem('User',btnId)
      navigate('/Profile')
  }

    const handleflow=(e:any)=>{
        const idusr=localStorage.getItem("User")
        const btnId=e.currentTarget.id
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "usrid": idusr,
          "followerid": parseInt(btnId)
        });

        var requestOptions:any = {
          method: 'DELETE',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        fetch("http://localhost:5000/fldlte", requestOptions)
                .then(response => response.json())
                .then(result => {
                  if (result.Message === "Unfollow Berhasil") {
                    alert("Delete Follower Berhasil");
                    fetchData()
                    // navigate('/Profile')  
                }else{
                  alert("Delete Follower Belum Beerhasil,Kesalahan Pada Server");
                      
                }
        })

      }
    const fetchData = () => {
        return fetch("http://localhost:5000/getflwr/"+localStorage.getItem('Akun'))
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
                  {y.nick}
                </div>
                <div id={y.usrid} onClick={(id)=>{handleflow(id)}} className="who-to-follow__buttonfl">
                Delete
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

export default IsiFlw

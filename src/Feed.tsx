import React from 'react';
import './Feed.css'
import FeedBox from './FeedBox'
import Post from './Post'
// import './Post.css'
import PostDetail from './PostDetail';
import { useState } from 'react';
import { useEffect } from 'react';
import { Postdetailprops } from './Interface/PostdetailIntrfce';


function Feed() {
    const [vpost, setVpost] = useState<Postdetailprops[]>([]);
    const [tweettext,setTweettext]=useState('');
  
    const handleTextTweet = (e:any) => {
      setTweettext(e.target.value)
    }
  
    const fetchData = () => {
        return fetch("http://localhost:5000/getalltweet")
            .then((response) => response.json())
            .then(x => {
                setVpost(x)
            })
    }
  
    const handleflowDlte = (e:any) => {
      const postIddlte=e.currentTarget.id
      
      var myHeaders = new Headers();
  
      myHeaders.append("Content-Type", "application/json");
  
      const requestOptions:any = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch("http://localhost:5000/postdel/"+parseInt(postIddlte), requestOptions)
              .then(response => response.json())
              .then(result => {
                if (result.Message === "Gagal Hapus Postingan") {
                  alert("Hapus Postingan Belum Berhasil,Err :Kesalahan Pada Server");
                    
              }else if (result.Message === "Hapus Belum Berhasil,Data Postingan Tidak Ditemukan"){
                alert("Hapus Postingan Belum Berhasil,Err :Data Postinga Pada Server,tidak ditemukan")
                
              }else{
                fetchData()
              }
  
              })
  
            }
  
  
  
    const handleflowLikes = (e:any) => {
      const postId=e.currentTarget.id
      let localid:any=localStorage.getItem('User')
      var myHeaders = new Headers();
  
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        "idposting": postId,
        "usrid": localid
      });
  
      var requestOptions:any = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
      fetch("http://localhost:5000/lks", requestOptions)
              .then(response => response.json())
              .then(result => {
                if (result.Message === "Sudah Pernah Menyukai Postingan ini") {
                  alert("Anda Sudah Pernah Menyukai Postingan ini");
                    
              }else{
                // alert("Berhasil Follow")
                fetchData()
              }
  
              })
              .catch((error) => {
                alert('GAGAL FETCHING. UserId Kosong/Tweet Kosong')
                console.log(error)
              });        
        }
  
    const submitForm=(e:any)=>{
      // e.preventDefault();
      let localidform:any=(localStorage.getItem('User'))
  
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        "usrid": localidform,
        "isipost": tweettext.toString()
      });
    
  
      var requestOptions:any = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      fetch("http://127.0.0.1:5000/post", requestOptions)
          .then((response) => response.json())
          .then((result) => {
           
            if(result.Message==='Posting Berhasil'){
              fetchData()
              
            }else{
              alert("Posting Belum Berhasil,Data userId/Tweet kosong")
            console.log(result.Message)
            }
  
          })
          .catch((error) => {
            alert('GAGAL FETCHING. UserId Kosong/Tweet Kosong')
            console.log(error)
          });
    }
  
    useEffect(() => {
        fetchData();
    }, [])
    
    const posting = vpost.map(y => {
        let cekiduser:any=localStorage.getItem('User')
      return (
      
        <div className='Post'>
          <PostDetail
          userName={y.nick}
          userImg={`https://i.pravatar.cc/150?img ${y.userid}`}
          userId={y.userid}
          time={y.postdte}
          postText={y.Tweet}
          likes={y.TotalLikes}
          idPost={y.idposting}
          handleflowLikes={handleflowLikes}
          handleflowDlte={handleflowDlte}
          varify={cekiduser === y.userid.toString()}
          />
          
        </div>
      )
    })
  
    return (
      <div className='Feed'>
        <FeedBox 
          tweettext={tweettext}
          handleTextTweet={handleTextTweet}
          submitForm={submitForm}
        />
        <Post
          posting={posting}
        />
      </div>
    )
  }
  
  export default Feed
  
  
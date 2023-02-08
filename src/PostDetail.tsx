import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Postdetail.css'
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined'
import Delete from '@material-ui/icons/Delete'
import { useNavigate } from 'react-router-dom'

function PostDetail({userName,userImg,userId,time,postText,varify,likes,idPost,handleflowLikes,handleflowDlte}:any) {
    const navigate=useNavigate()
    
  
    const pndahhal=(e:any)=>{
      const btnId=e.currentTarget.id
      localStorage.setItem('User',btnId)
      // console.log(btnId)
      navigate('/Profile')
  
    }
    
    
  
  
    return (
      <div className='Postdetail'>
        <div className='post_header'>
          <Avatar src={userImg}/>
          <div className='post'>
              <h2 id={userId} onClick={(id)=>{pndahhal(id)}} className='usrgmail'>{`${userName}@gmail.com`} </h2><span className='spantime'>{time}</span>
              <h2 className='posttext'>{postText}</h2>    
          </div>
          
        </div>
        <div className='post_body'>
          <div className='post_actions'>
              <div className='action_option'>
              <IconButton >
                
                  <FavoriteBorderOutlined id={idPost} onClick={(id)=>{handleflowLikes(id)}}/>{likes}
              </IconButton>                
              </div>
              <div className='action_option'>
              <IconButton>
                { varify && <Delete id={idPost} onClick={(id)=>{handleflowDlte(id)}}/> }
                           
                  
              </IconButton>    
              
              </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default PostDetail
  
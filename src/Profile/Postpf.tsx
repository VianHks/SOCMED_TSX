import React from 'react'
import './Postpf.css'
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined'
import Delete from '@material-ui/icons/Delete'
import { useState,useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import { PostPfProps } from '../Interface/ProfileIntrfce'

function Postpf() {
    const [vpost, setVpost] = useState<PostPfProps[]>([]);
    

    const fetchData = () => {
        let idusr=localStorage.getItem("User")
        return fetch("http://localhost:5000/gettweet/"+idusr)
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
    <div className='bodypostpf'>
    <div className="postpf">
    <div className="post__body">
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            
            <span className="post__headerSpecial">
            <span className="material-icons post__badge"> {y.postdate} </span>
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p>{y.Tweet}</p>
        </div>
      </div>
     
      <div className="post__footer">
        <span className="material-icons"> </span>
        <IconButton>
        <FavoriteBorderOutlined />{y.TtlLikes}
        </IconButton>
        
       
        <span className="material-icons"></span>
        <IconButton>
        <Delete/>
        </IconButton>
        
        <span className="material-icons"></span>
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

export default Postpf

import { IconButton } from '@material-ui/core'
import React from 'react'
import './Widgets.css'
import SearhIcon from '@material-ui/icons/Search'
import { useState,useEffect } from 'react'
import Trendings from './Trendings'
import './Widget/Whoto.css'
import Whoto from './Widget/Whoto'
import { useNavigate } from 'react-router-dom'

function Widgets() {
    const navigate=useNavigate()
    const[value,setValue]=useState('');
    const[valueId,setValueId]=useState('');
    const [vpost, setVpost] = useState([]);

    const onChngeEvent=(e:any)=>{

        setValue(e.target.value);
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "Nickusr": value.toString()
        });

        var requestOptions:any = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        
        fetch("http://localhost:5000/usrsearch", requestOptions)
        .then((response) => response.json())
        .then((data) => {
    
      
            if(data.Message==='User tidak ditemukan'){
              
            }else{
                // console.log(data)
               setVpost(data)
            }
          })
    }
    useEffect(() => {
        
    },[])
    const onSearch=(searchTerm:any,e:any)=>{
        const idUsrsearch=e.currentTarget.id
        localStorage.setItem('User',idUsrsearch)
        setValue(searchTerm)
    }
    const hndleSrch=()=>{
        navigate('/Profile')
    }
return (
    <div className='Widgets'>
    <div className="search-container">
    <div className="search-inner">
      <input type="text" placeholder='Search User' value={value} onChange={onChngeEvent} />
      
      <button className='btnsearch' onClick={() => hndleSrch()}> Search </button>
    </div>
    <div className="dropdown">
    
      {vpost
        .filter((data:any) => {
          const searchTerm = value.toLowerCase();
          const fullName = data.Nickname.toLowerCase();

          return (
            searchTerm &&
            fullName.startsWith(searchTerm) &&
            fullName !== searchTerm
          );
        })
        .slice(0, 10)
        .map((data:any) => (
          <div id={data.usrid}
            onClick={(id) => onSearch(data.Nickname,id)}
            className="dropdown-row"
            key={data.Nickname}>
            {data.Nickname}
          </div>
        ))}
    </div>
  </div>    



        <div className='trending_area'>
        <div className="layout__right-sidebar">
        <div id="trendsfu" className="trends-for-you">
        <div className="trends-for-you__block">
        <div className="trends-for-you__heading">
            Trends for you
        </div>
        </div>
        </div>
        </div>
        
        <hr className='dividers'/>
            
            <div className='trending_body'>
            
                <Trendings/>
                
                <div id="whtoflw" className="who-to-follow">
                    <div className="who-to-follow__block">
                    <div className="who-to-follow__heading">
                        Who to follow
                    </div>
                    
                    </div>
                    <hr className='dividers'/>
                </div>
                <Whoto/>
                
               
               
            </div>
       
        </div> 
    </div>
)
}

export default Widgets

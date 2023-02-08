import React from 'react'
import './Trendings.css'
import { useEffect,useState } from 'react';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined'
import './Widget/Whoto.css'
import { WidgetTrendingsprops } from './Interface/WidgetIntrfce';

function Trendings() {
    const [vpost, setVpost] = useState<WidgetTrendingsprops[]>([]);
  
      const fetchData = () => {
          return fetch("http://localhost:5000/ppstwitindex")
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
          <div className='Trendings'>
              <div className='WordWide'>
              <h3>#{y.IsiPost}</h3>
              <h5><FavoriteBorderOutlined/>{y.LikesCount}</h5>   
              </div>
          </div>
        )      
  
      })
      return(
        <div>
        {posting}
        </div>
        
      )
  }
  
  export default Trendings;
  
  
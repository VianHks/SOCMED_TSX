import React from 'react'
import './Flowerlist.css'

import { Divider } from '@material-ui/core'

import IsiFlw from './Isiflw'

function Flowerlist() {


   
    return (
      <div className='bodyfllist'>
      <div className='Tagats'> Followers</div>
      
      <Divider/>
      <div>
       <IsiFlw/>
       </div>   
      </div>
    )
  
}

export default Flowerlist

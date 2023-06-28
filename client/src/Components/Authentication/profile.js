import React, { useContext, useState } from 'react'
import {Avatar} from '@chakra-ui/react'
function Profile(props) {
    const [color1,setcolor]=useState('linear-gradient(90deg, rgba(100,194,255,1) 0%, rgba(24,160,199,1) 48%, rgba(15,185,255,1) 100%);')
    const [message,setmessage]=useState()
    const messagedata=(e)=>{
      console.log(e.target.value,"clicked");
    }
  return (
    <div>
        <button className="user" style={{background:color1}} onClick={messagedata} value={props.data1._id} >
   <Avatar width={'44px'} height='44px' margin={'3px'} marginLeft='10px' name='Dan Abrahmov' src={props.img} />
   <h1 className="profiletxt">{props.name}</h1>
   </button>
    </div>
  )
}

export default Profile
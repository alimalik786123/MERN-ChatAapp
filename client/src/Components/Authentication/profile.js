import React, { useContext, useState } from 'react'
import {Avatar} from '@chakra-ui/react'
function Profile() {
    const [color1,setcolor]=useState('linear-gradient(90deg, rgba(100,194,255,1) 0%, rgba(24,160,199,1) 48%, rgba(15,185,255,1) 100%);')
    const bgchange=()=>{
      setcolor("linear-gradient(#e66465, #9198e5);")
    }
  return (
    <div>
        <button className="user" style={{background:color1}} onClick={bgchange}>
   <Avatar width={'44px'} height='44px' margin={'3px'} marginLeft='10px' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
   <h1 className="profiletxt">hello</h1>
   </button>
    </div>
  )
}

export default Profile
import { LineAxisOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const Chat = () => {
   const [chats,setchats]=useState([])
    const fetchChat=async()=>{
      const data=await axios.get("/hello")
      console.log(data);
    }
    useEffect(()=>{
   fetchChat()
    },[])
  return (
    <div>Chat page</div>
  )
}

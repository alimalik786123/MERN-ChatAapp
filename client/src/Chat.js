
import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {VStack,Input,Button} from '@chakra-ui/react'

export const Chat = () => {
   const [chats,setchats]=useState([])
    const fetchChat=async()=>{
      const data=await axios.get("/hello")
      console.log(data);
    }
  //   useEffect(()=>{
  //  fetchChat()
  //   },[])
  return (
    <>
    <div className="left">
     <VStack>
      
     </VStack>
    </div>
    <div className="right">
      <div className="profile">
        <h1>profile here</h1>
      </div>
      <div className="message">
        <p>hello</p>
      </div>
      <div className='ip'>
      <Input placeholder='Say hii...' >

        
      </Input>
      <Button
      marginLeft={'10px'}
      >hel</Button>
      <Button
      marginLeft={'10px'}
      >hel</Button>

      </div>
    </div>
    </>
  )
}

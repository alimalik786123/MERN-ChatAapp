
import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {VStack,Input,Button,InputGroup,InputLeftElement,InputRightElement} from '@chakra-ui/react'
import {PhoneIcon,Search2Icon} from '@chakra-ui/icons'

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
     <InputGroup margin={'5px'}
     width='300px'
     >
    
    <Input type='tel' placeholder='Search user'
    backgroundColor={'white'}
    />
    <InputRightElement>
    <Button backgroundColor={'white'}>
      <Search2Icon color={'black'}/>
    </Button>
    </InputRightElement>
  </InputGroup>
     </VStack>
    </div>
    <div className="right">
      <div className="profile">
        <h1>profile here</h1>
      </div>
      <div className="message">
       <div className="content">helloosdjvjksndjkva</div>
       <div className="content">helloosdjvjksndjkvafgnwhwthntyetmeyjmeyjmyumeymueyumdtmetmetymetmetyjetetyjetynetynnsfgnwty</div>
       <div className="content2"><div className="content3"></div><div className="content3"><div className="con">jdbwegdvsdv</div></div></div>
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

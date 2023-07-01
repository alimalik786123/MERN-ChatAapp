import React, { useState } from 'react'
import bgimg from './chatpage.jpg'
import ScrollToBottom from 'react-scroll-to-bottom';
import socketIO from 'socket.io-client'
import 'animate.css'
import {VStack,Input,Button,Avatar,InputGroup,InputLeftElement,InputRightElement,  Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader, 
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  
    useDisclosure
  } from '@chakra-ui/react'
  import Chatright from './Chatright';
  import Chatleft from './Chatleft';
import { PeopleSharp } from '@mui/icons-material';
import { useEffect } from 'react';

const socket=socketIO('http://localhost:8080',{transports:['websocket']})

function ContentPage(props) {
  const[type,settype]=useState("")
  const[msg1,setmsg]=useState([])
  const curruser=window.localStorage.getItem("data")
  console.log(props.content,"msg ka data");
  const data1=props.content
  console.log(data1,"data1 hai");
  const typing=(e)=>{
    settype(e.target.value)
  }
  const handlesubmit=async(e)=>{
    const constdata= await fetch("http://localhost:8080/message",{
      method:'POST',
      headers:{
       'Content-Type':'application/json',
      },
      body:JSON.stringify({to:props.userdata._id,from:curruser,content:type})})
       const profiledata=await constdata.json()
       console.log(profiledata);
       if(profiledata.acknowledged===true){
        settype("")
       const data={to:props.userdata._id,from:curruser,content:type}
        setmsg([...msg1,data])
       }
  }
  const check=async()=>{
    const curruser=window.localStorage.getItem('data')
    const id=window.localStorage.getItem('selectedid')
    console.log(id,'id of selected person');
    const messagedata= await fetch("http://localhost:8080/fetchChat",{
      method:'POST',
      headers:{
       'Content-Type':'application/json',
      },
      body:JSON.stringify({curruser:curruser,userid:id})})
      const msg=await messagedata.json()
      console.log(msg.message,"run hua"); 
      setmsg(msg.message)
      console.log(msg1,'msg1msg1msg1');


      socket.on('chat',(data)=>{
        console.log('connected hellosjdvnjsdnvjsd');
          
        
      })
     socket.emit('chat',window.localStorage.getItem('selectedid'))

     socket.on('data',(data)=>{
      console.log(data,'socket ka data');
        
      
    })
    // console.log("run hua")
  }
  useEffect(()=>{ 
 return()=>{}

},[])
  useEffect(()=>{check()},[window.localStorage.getItem('selectedid')])
  
  return (
    
         <div className="right">
          {data1===undefined ? <div className='bgimg1'><img className='img1' src={bgimg} alt="" /></div>:
          <>
           <div className="profile">
      <Avatar width={'44px'} height='44px' margin={'3px'} marginLeft='25px' name='Dan Abrahmov' src={props.userdata.img} />
      <h2 className='profiletxt'>{props.userdata.name}</h2>
      </div>
      <ScrollToBottom className="message">
      {console.log(data1)}
      {msg1 && msg1.map((data1)=>{
        if(curruser===data1.from){
          return (<Chatright
          content={data1.content}
          />)
          }
        else{
          return <Chatleft
          content={data1.content}
          />
        }
      })}
     
       
      
      </ScrollToBottom>
      <div className='ip'>
        <div className='txtdiv'>
        <InputGroup>
      <Input placeholder='Say hii...' fontSize={'xl'}  onChange={typing} value={type} >

        
      </Input>
      <InputRightElement>
      <Button margin={'2px'} onClick={handlesubmit} onKeyDown={handlesubmit} >send <i class="fa-solid fa-paper-plane-top"></i><i class="fa-solid fa-paper-plane"></i></Button>
      </InputRightElement>
      </InputGroup>
      </div>
      <Button
      marginLeft={'10px'}
      ><i class="fa-solid fa-image"></i></Button>
      <Button
      marginLeft={'10px'}
      ><i class="fa-solid fa-file"></i></Button>

      </div>
          </>
          }
        
    </div>
  )
}

export default ContentPage
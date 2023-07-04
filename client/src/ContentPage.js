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
let msg
let socket=socketIO('http://localhost:8080')

function ContentPage(props) {
  const[type,settype]=useState("")
  const[msg1,setmsg]=useState([])
  const curruser=window.localStorage.getItem("data")
  const[typing1,settyping]=useState(false)
  const[istyping1,setistyping]=useState(false)
  const[socketconnected1,setsocketconnected]=useState(false)
  const[chatdata,setchatdata]=useState()
  const chatid=window.localStorage.getItem('chatid')
  const data1=props.content
  const typing=(e)=>{
    let id=window.localStorage.getItem('selectedid')
    settype(e.target.value)
    console.log(msg._id,'chat ka id');
    if(!typing1){
      settyping(true)
      socket.emit('typing',{id:id,chatid:msg._id})
      console.log('typing is tru now');
      
    }
    let lastTypingtime=new Date().getTime()
    var timerlen=2000
    setTimeout(()=>{
      var timenow=new Date().getTime()
      var timediff=timenow-lastTypingtime
      if(timediff>=timerlen && typing1){
        socket.emit('notyping',{msg:msg._id})
        settyping(false)
        console.log('typing is false now');
      }
    },timerlen)
    

  }
  const handlesubmit=async(e)=>{
    socket.emit('notyping',{msg:msg._id})
    settyping(false)
    console.log('typing is false now after submit',typing1);
    const constdata= await fetch("http://localhost:8080/message",{
      method:'POST',
      headers:{
       'Content-Type':'application/json',
      },
      body:JSON.stringify({to:props.userdata._id,from:curruser,content:type})})
       const profiledata=await constdata.json()
       if(profiledata.acknowledged===true){
        socket.emit('chat',window.localStorage.getItem('selectedid'))
        
        settype("")
       const data={to:props.userdata._id,from:curruser,content:type}
        setmsg([...msg1,data])
        socket.emit('newmessage',{data:data1,msg:{to:props.userdata._id,from:curruser,content:type},userid:window.localStorage.getItem('selectedid')})
       }
  }
  const check=async()=>{
    

    socket.on('notyping',()=>{
      setistyping(false)
    })
    const curruser=window.localStorage.getItem('data')
    const id=window.localStorage.getItem('selectedid')
    const messagedata= await fetch("http://localhost:8080/fetchChat",{
      method:'POST',
      headers:{
       'Content-Type':'application/json',
      },
      body:JSON.stringify({curruser:curruser,userid:id})})
      msg=await messagedata.json()
      setmsg(msg.message)
      socket.emit('join chat',chatid)

     
     socket.emit('chat',window.localStorage.getItem('selectedid'))

     socket.on('data',(data)=>{
      console.log(data.data,'socket ka data');
        
      
    })
    // console.log("run hua")
  }
 
  useEffect(()=>{
    socket.emit('setup',curruser)
    socket.on("connected",()=>{ 
       setsocketconnected(true)
       console.log('socket connection is true now');
    })

    


    socket.on('typing',(id)=>{
      setistyping(true)
    })

    socket.on('notyping',(id)=>{
      setistyping(false)
    })
 
  },[window.localStorage.getItem('chatid')])

  useEffect(()=>{check()},[window.localStorage.getItem('selectedid')])
  useEffect(()=>{
    

    console.log('message recieved is running');
    socket.on('message recieved',(data)=>{
      
      if(data.chatid===window.localStorage.getItem('chatid')){
      setmsg(msg1.concat(data.msg))
      console.log('chatid=room');
      }
      else{

      }
      console.log(data.msg,'socket ka msg');
    })
  })
  
  return (
    
         <div className="right">
          {data1===undefined ? <div className='bgimg1'><img className='img1' src={bgimg} alt="" /></div>:
          <>
           <div className="profile">
      <Avatar width={'44px'} height='44px' margin={'3px'} marginLeft='25px' name='Dan Abrahmov' src={props.userdata.img} />
      <h2 className='profiletxt'>{props.userdata.name}</h2>
      </div>
      <ScrollToBottom className="message"> 
      
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
     {istyping1?<><div><h1><Chatleft content='typing...'/></h1></div></>:<></>}
       
      
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
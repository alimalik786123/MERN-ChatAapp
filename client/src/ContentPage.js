import React, { useState } from 'react'
import bgimg from './chatpage.jpg'
import ScrollToBottom from 'react-scroll-to-bottom';
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
function ContentPage(props) {
  const[type,settype]=useState("")
  const[msg,setmsg]=useState([])
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
       }
  }
  
  return (
    
         <div className="right">
          {data1===undefined ? <div className='bgimg1'><img className='img1' src={bgimg} alt="" /></div>:
          <>
           <div className="profile">
      <Avatar width={'44px'} height='44px' margin={'3px'} marginLeft='25px' name='Dan Abrahmov' src={props.userdata.img} />
      <h2 className='profiletxt'>{props.userdata.name}</h2>
      </div>
      <div className="message">
      
      {data1 && data1.map((data1)=>{
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
     
       
      
      </div>
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

import React, { useState } from 'react'
import axios from 'axios'
import { useEffect, } from 'react'
import Profile from './Components/Authentication/profile'
import {VStack,Input,Button,Avatar,InputGroup,InputLeftElement,InputRightElement,  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,

  useDisclosure
} from '@chakra-ui/react'
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
    <div className="left">
     <VStack>
      <div className="side">
        <div className="drawer">
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen} marginTop="5px" left={'-5%'} width='30px' borderRadius='80px' >
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </div>
     <InputGroup margin={'5px'}
     width='220px'
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
  </div>
  <hr style={{width:'250px',color:'black',backgroundColor:'black'}} />
  <Profile/>
  <Profile/>
   <Profile/>
     </VStack>
    </div>
    <div className="right">
      <div className="profile">
      <Avatar width={'44px'} height='44px' margin={'3px'} marginLeft='25px' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
      <h2 className='profiletxt'>hello</h2>
      </div>
      <div className="message">
       <div className="content">helloosdjvjksndjkva</div>
       <div className="content">helloosdjvjksndjkvafgnwhwthntyetmeyjmeyjmyumeymueyumdtmetmetymetmetyjetetyjetynetynnsfgnwty</div>
       <div className="content2"><div className="content3"></div><div className="content3"><div className="con">jdbwegdvsdv my name is malik mohaama sd</div></div></div>
       <div className="content">helloosdjvjksndjkva</div>
      <div className="content2"><div className="content3"></div><div className="content3"><div className="con">jdbwegdvsdv my name is malik mohaama sd</div></div></div>
      <div className="content"><i class="fa-solid fa-user"></i>helloosdjvjksndjkvafgnwhwthntyetmeyjmeyjmyumeymueyumdtmetmetymetmetyjetetyjetynetynnsfgnwty</div>
      </div>
      <div className='ip'>
        <div className='txtdiv'>
        <InputGroup>
      <Input placeholder='Say hii...' >

        
      </Input>
      <InputRightElement>
      <Button margin={'2px'} ><i class="fa-solid fa-paper-plane-top"></i><i class="fa-solid fa-paper-plane"></i></Button>
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
    </div>
    </>
  )
}

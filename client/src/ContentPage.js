import React from 'react'
import {VStack,Input,Button,Avatar,InputGroup,InputLeftElement,InputRightElement,  Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  
    useDisclosure
  } from '@chakra-ui/react'
function ContentPage() {
  return (
    
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
      <Input placeholder='Say hii...' fontSize={'xl'} >

        
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
  )
}

export default ContentPage
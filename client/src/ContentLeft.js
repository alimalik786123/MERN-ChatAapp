import React, { useContext, useEffect, useState } from 'react'
import {VStack,Input,Button,Avatar,InputGroup,InputLeftElement,InputRightElement,  Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  
    useDisclosure
  } from '@chakra-ui/react'
  import { Chat } from './Chat'
  import Profile from './Components/Authentication/profile'
  import {PhoneIcon,Search2Icon,CloseIcon} from '@chakra-ui/icons'
 


function ContentLeft(props) {
  const userid=useContext(Chat)
  const curruser=window.localStorage.getItem("data")
  const [prof,setprof]=useState([])
  const[query,setquery]=useState('')
  const[button,setbutton]=useState(true)
  const[clkmsg,setclkmsg]=useState('')
  const [fun,setfun]=useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure() 
    const btnRef = React.useRef()
    const getid=async(id)=>{
      
      const messagedata= await fetch("http://localhost:8080/fetchChat",{
        method:'POST',
        headers:{
         'Content-Type':'application/json',
        },
        body:JSON.stringify({curruser:curruser,userid:id._id})})
        const msg=await messagedata.json()
        window.localStorage.setItem("chatid",msg._id)
        setclkmsg(msg)
        props.message(msg,id)

    }
    const txtchange=(e)=>{
       setquery(e.target.value)
       
    }
    const search=async()=>{
      if(!query){
        alert("enter something")
        return
      }
      else{
      setbutton(false)  
      setfun(false)
      const searchresult= await fetch("http://localhost:8080/search",{
        method:'POST',
        headers:{
         'Content-Type':'application/json',
        },
        body:JSON.stringify({currid:curruser,query:query})})
        var searchdata=await searchresult.json()
        console.log(searchdata, curruser,query);
        setprof(searchdata)
      }
        
    }

    const getdata=async()=>{
      
      var profile=window.localStorage.getItem('profileid')
      profile=JSON.parse(profile)
      const profileuserdata= await fetch("http://localhost:8080/profileuserdata",{
        method:'POST',
        headers:{
         'Content-Type':'application/json',
        },
        body:JSON.stringify({id:profile})})
        const profileuserdata2=await profileuserdata.json()
        setprof(profileuserdata2)
        // setquery('')
        setbutton(true)
        setfun(true)
    
     }

    useEffect(()=>{
      getdata()
       },[])
    
  return (
    
        <div className="left">
     <VStack>
      <div className="side">
        <div className="drawer">
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen} marginTop="5px" left={'-5%'} width='20px' borderRadius='80px' >
        <Avatar name='Dan Abrahmov' src='http://res.cloudinary.com/mailchat/image/upload/v1686847613/computer-meme-2_lymwzy.jpg' />
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
            <Input placeholder='Type here...'  />
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
    onChange={txtchange}
    backgroundColor={'white'}
    value={query}
    />
    <InputRightElement>
    <Button backgroundColor={'white'} onClick={fun?search:getdata}>
      {button?<Search2Icon color={'black'}/>:<CloseIcon/>}
    </Button>
    </InputRightElement>
  </InputGroup>
  </div>





 
  <hr style={{width:'250px',color:'black',backgroundColor:'black'}} />
  
  {prof && prof.map((data1)=>{
    return <Profile
    name={data1.name}
    img={data1.img}
    btn={data1._id}
    data1={data1}
    getid={getid}
    />
  })}
  
     </VStack>
    </div>
    
  )
}

export default ContentLeft
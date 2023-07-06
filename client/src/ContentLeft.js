import React, { useContext, useEffect, useState } from 'react'
import {VStack,Input,Button,Avatar,InputGroup,InputLeftElement,InputRightElement,Text,  Drawer,
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
import { useNavigate } from 'react-router-dom'
 let userdata,userdata1


function ContentLeft(props) {
 
  
  const userid=useContext(Chat)
  const curruser=window.localStorage.getItem("data")
  const [prof,setprof]=useState([])
  const[query,setquery]=useState('')
  const[button,setbutton]=useState(true)
  const[clkmsg,setclkmsg]=useState('')
  const [fun,setfun]=useState(true)
  const[user,setuser]=useState({pic:'',name:'',email:''})
    const { isOpen, onOpen, onClose } = useDisclosure() 
    const btnRef = React.useRef()
    const redirect=useNavigate()
    const logout=()=>{
      window.localStorage.removeItem('selectedid')
      window.localStorage.removeItem('userdata')
      window.localStorage.removeItem('data')
      window.localStorage.removeItem('signin')
      redirect('/')


    }

    useEffect(()=>{
      const check=localStorage.getItem('signin') 
      if(!check){
       redirect('/')
      }},[])


      const Userdata=async()=>{
        const userdata= await fetch("https://mern-chat-app-server-nine.vercel.app/userdata",{
          method:'POST',
          headers:{
           'Content-Type':'application/json',
          },
          body:JSON.stringify({curruser:curruser})})
          const msg=await userdata.json()
          setuser(msg)
      }

      useEffect(()=>{Userdata()},localStorage.getItem('data'))
    const getid=async(id)=>{
      
      const messagedata= await fetch("https://mern-chat-app-server-nine.vercel.app/fetchChat",{
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
      const searchresult= await fetch("https://mern-chat-app-server-nine.vercel.app/search",{
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
      const profileuserdata= await fetch("https://mern-chat-app-server-nine.vercel.app/profileuserdata",{
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
       console.log(user,'user ka data')
  return (
    
        <div className="left">
     <VStack>
      <div className="side">
        <div className="drawer">
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen} marginTop="5px" left={'-5%'} width='20px' borderRadius='80px' >
       <Avatar name='Dan Abrahmov' src={user.pic} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent alignContent={'center'}>
          <DrawerCloseButton />
          <DrawerHeader>Profile : </DrawerHeader>
          <Avatar width={'50%'} height='25%' marginLeft={'80px'} border={'2px'} alignItems={'center'} name='Dan Abrahmov' src={user.pic} />

          <DrawerBody>
            <hr />
            <br />
            <Text fontSize={'2xl'}>NAME : {user.name}</Text>
            <Text fontSize={'2xl'}>EMAIL : {user.email}</Text>

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={logout}>LOGOUT</Button>
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
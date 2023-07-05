import React from 'react'
import { FormControl, FormLabel,Button, Input, InputGroup, InputRightElement, VStack,useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [show,setshow]=useState(false)
   
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [loading,setloading]=useState('')
    const toast=useToast()
    let redirect=useNavigate()
    const invert=()=>{
        setshow(!show)
    }
    const invert1=()=>{
        setshow(!show)
    }
    const submit=async(e)=>{
      setloading(true)
      console.log(email,password);
      if(!email || !password){
        toast({ 
          title: "Please enter all the field",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        // alert("failed")
        setloading(false)
        return
      }
      else{
        e.preventDefault()
          const response= await fetch("http://localhost:8080/login",{
           method:'POST',
           headers:{
            'Content-Type':'application/json',
           },
           body:JSON.stringify({email:email,password:password})
        })
        const res=await response.json()
        const userdata=JSON.stringify(res)
        console.log(res,'login data');
        window.localStorage.setItem("data",res._id)
        window.localStorage.setItem("signin",res._id)
        window.localStorage.setItem('userdata',userdata)
 
        redirect("/chat")

        
      }
    }
  return (
    <VStack spacing='5px'>
       
          <FormControl>
            <FormLabel> Email </FormLabel>
                <Input
                 placeholder='Enter Email'
                 onChange={(e)=>setemail(e.target.value)}
                 marginBottom='15px'
                 isRequired
                 type={'email'}
                ></Input>
          </FormControl>
          
          <FormControl>
            <FormLabel> Password </FormLabel>
            <InputGroup>

                <Input
                 placeholder='Enter Password'
                 onChange={(e)=>setpassword(e.target.value)}
                 marginBottom='15px'
                 isRequired
                 type={show?'text':'password'}

                ></Input>
                <InputRightElement width='4.5rem'> 
                  <Button h='1.75rem' size='sm' onClick={invert1} >
                  {show?"Hide":"Show"}
                  </Button>
                </InputRightElement>
                </InputGroup>
          </FormControl>
          
          <Button colorScheme='blue' w={'100%'} variant='outline' onClick={submit}>
    Login
  </Button>
  <Button colorScheme='red' w={'100%'} variant='outline'>
    Guest user 
  </Button>
           
           
        
    </VStack >
  )
}

export default Login
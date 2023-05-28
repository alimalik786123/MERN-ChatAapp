import React from 'react'
import { FormControl, FormLabel,Button, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useState } from 'react'
const Login = () => {
    const [show,setshow]=useState(false)
   
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
   

    const invert=()=>{
        setshow(!show)
    }
    const invert1=()=>{
        setshow(!show)
    }
    const handlesubmit=async()=>{
      //  await axios("/")
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
          
          <Button colorScheme='blue' w={'100%'} variant='outline'>
    Login
  </Button>
  <Button colorScheme='red' w={'100%'} variant='outline'>
    Guest user 
  </Button>
           
           
        
    </VStack >
  )
}

export default Login
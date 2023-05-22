import React from 'react'
import { FormControl, FormLabel,Button, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useState } from 'react'
const Signup = () => {
    const [show,setshow]=useState(false)
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [cnfpassword,setcnfpassword]=useState('')
    const [pic,setdpic]=useState('')

    const invert=()=>{
        setshow(!show)
    }
    const invert1=()=>{
        setshow(!show)
    }

    const handledata=(e)=>{
        setname(e.target.value)
        console.log(name);
    }
  return (
    <VStack spacing='5px'>
        <FormControl>
            <FormLabel> Name </FormLabel>
                <Input
                 placeholder='Enter Name'
                 onChange={(e)=>setname(e.target.value)}
                 marginBottom='15px'
                 isRequired
                ></Input>
          </FormControl>
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
          <FormControl>
            <FormLabel> Confirm </FormLabel>
            <InputGroup>
                <Input
                 placeholder='Confirm Password'
                 onChange={(e)=>setcnfpassword(e.target.value)}
                 marginBottom='15px'
                 isRequired
                 type={show?'text':'password'}
                ></Input>
                 <InputRightElement width='4.5rem'> 
                  <Button h='1.75rem' size='sm' onClick={invert} >
                     {show?"Hide":"Show"}
                  </Button>
                </InputRightElement>
                </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel> Add your pic </FormLabel>
                <Input
                 placeholder='Enter Email'
                 onChange={(e)=>setemail(e.target.value)}
                 marginBottom='15px'
                 p={'1.5'}
                 type={'file'}
                 accept='image/*'
                ></Input>
          </FormControl>
          <Button colorScheme='blue' w={'100%'} variant='outline'>
    Button
  </Button>
           
           
        
    </VStack >
  )
}

export default Signup
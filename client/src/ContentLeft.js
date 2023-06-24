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
  import Profile from './Components/Authentication/profile'
  import {PhoneIcon,Search2Icon} from '@chakra-ui/icons'

function ContentLeft() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    
        <div className="left">
     <VStack>
      <div className="side">
        <div className="drawer">
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen} marginTop="5px" left={'-5%'} width='30px' borderRadius='80px' >
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
    
  )
}

export default ContentLeft
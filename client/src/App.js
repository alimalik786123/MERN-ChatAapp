import { Button, ButtonGroup, ChakraProvider } from '@chakra-ui/react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import socketIO from 'socket.io-client'
import Home from './Home'; 
import { Chat } from './Chat';

const socket=socketIO('http://localhost:8080',{transports:['websocket']})
function App() {
  // socket.on('connect',()=>{
  //   console.log('connected hellosjdvnjsdnvjsd');
  // })
  return (<>
   <div className='App'>
    <ChakraProvider>
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/chat' element={<Chat/>}/>

     



      
    </Routes>
   </Router>
     
     
   
   </ChakraProvider>
    </div>
    </>
  );
}

export default App;

import { Button, ButtonGroup, ChakraProvider } from '@chakra-ui/react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Home from './Home'; 
import { Chat } from './Chat';
function App() {
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

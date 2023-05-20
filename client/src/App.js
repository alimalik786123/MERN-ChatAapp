import { Button, ButtonGroup } from '@chakra-ui/react'
import {Route,Switch} from 'react-router-dom'
import './App.css'
import Home from './Home';
import { Chat } from './Chat';
function App() {
  return (
   <div className='App'>
   <Switch>
     <Route exact path='/' component={Home}/>
     <Route path='/chat' component={Chat}/>
   </Switch>
    </div>
  );
}

export default App;

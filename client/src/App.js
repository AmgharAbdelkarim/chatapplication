import React   from 'react';
import { BrowserRouter ,Route } from 'react-router-dom' ;

import Chat from './components/chat/chat';

import SignIn from './components/join/join';


const App = ()=> {
  
  
    return ( 
       <BrowserRouter>
      <Route exact path='/' component={SignIn} />
      <Route path='/chat'  component={Chat} />
      
      
    </BrowserRouter>
     );
  
}
 
export default App;


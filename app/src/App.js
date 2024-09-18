import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
}from 'react-router-dom';

import Fetch from './component/socketComponent';
import HomePage from './component/buttonComponent';
function App() {
  return(
        
    <Router>

    <Switch>
    <Route exact path="/" component={HomePage} type={'auth'}  />
    <Route exact path="/chat-page" component={Fetch} type={'auth'}  />

 
    </Switch>  
    
    
    </Router>
    

   
   
    
   

)
}

export default App;

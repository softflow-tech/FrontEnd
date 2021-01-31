import React,{useState} from 'react';
import './App.css';
import Login from './components/login';
import Register from "./components/register";
import { BrowserRouter, Route } from "react-router-dom";




function App() {

  const [token,setToken] = useState('');

  const userLogin = (tok) =>{
    setToken(tok)
    console.log(tok);
    
  }


  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/login'>
        <Login userLogin={userLogin}/>
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import Profile from './Pages/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Signup from './Components/LoginOption/SignupOption/SignupOption';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
      <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home />}></Route>
      <Route path='/Profile'  element={<Profile />}></Route>
      <Route path='/Signup'  element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
  
  </React.StrictMode>


);


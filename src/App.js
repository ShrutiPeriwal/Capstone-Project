import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/home';
import SignIn from './components/signin/signin.jsx';
// import Signup from './components/signup/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
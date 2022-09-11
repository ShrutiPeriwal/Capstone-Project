import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/home';
import Navigation from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx'
import SignIn from './components/signin/signin.jsx';
import SignUp from './components/signup/signup';
import Hat from './category/hats/hat';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/hat' element={<Hat />}/>
      </Routes>
      <Footer />
      
    </BrowserRouter>
  )
}

export default App;
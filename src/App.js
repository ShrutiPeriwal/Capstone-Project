import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/home';
import Navigation from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx'
import SignIn from './components/signin/signin.jsx';
import SignUp from './components/signup/signup';
import Hat from './category/hats/hat';
import Jacket from './category/jackets/jacket';
import Shoe from './category/shoes/shoe';
import Top from './category/tops/top';
import AddToCart from './components/addtocart/cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <Navigation />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/hat' element={<Hat />}/>
        <Route path='/jacket' element={<Jacket />}/>
        <Route path='/shoe' element={<Shoe />}/>
        <Route path='/top' element={<Top />}/>
        <Route path='/addtocart' element={<AddToCart />}/>
      </Routes>
      <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
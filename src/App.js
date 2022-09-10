import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import SignIn from './components/signin/signin'
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      
     
      <Footer /> 
      <SignIn />
    </div>
  )
}

export default App
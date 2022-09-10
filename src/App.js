import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Footer /> 
      <SignIn />
      <SignUp />
    </div>
  )
}

export default App
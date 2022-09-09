import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import ControlledCarousel from './components/Slider/slider';
import CardComponent from './components/card/card.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <ControlledCarousel />
      <h3 className="heading">Top Selling Products</h3>
      <CardComponent />
    </div>
  )
}

export default App
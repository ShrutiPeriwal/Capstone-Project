import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import ControlledCarousel from './components/Slider/slider';

const App = () => {
  return (
    <div>
      <Navbar />
      <ControlledCarousel />
    </div>
  )
}

export default App
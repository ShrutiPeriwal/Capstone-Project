import React from 'react';
import Navigation from '../navbar/navbar.jsx';
import Slider from '../Slider/slider.jsx';
import Card from '../card/card.jsx';
import Footer from '../footer/footer.jsx';

const home = () => {
  return (
    <div>
        <Navigation />
        <Slider />
        <h3 className="heading">Top Selling Products</h3>
        <Card />
        <Footer />
    </div>
  )
}

export default home
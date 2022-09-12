import React from 'react';
import Slider from '../Slider/slider.jsx';
import MediaCard from '../card/card';

const home = () => {
  return (
    <div>
        <Slider />
        <h3 className="heading">Top Selling Products</h3>
        <MediaCard />
    </div>
  )
}

export default home
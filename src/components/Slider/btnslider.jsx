import React from 'react';
import "./slider.css";
import leftArrow from "./icons/left.png";
import rightArrow from "./icons/right.png";

const btnslider = ({ direction, moveSlide }) => {
    console.log(direction, moveSlide);
  return (
    <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
        <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}

export default btnslider
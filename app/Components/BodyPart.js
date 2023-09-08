'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
};

export default function BodyPart({arr}) {
    console.log(arr)
  return (
    <div className="stage-3">
      <Slider {...settings}>
        {arr.map((part , index)=>{
            return (
                <div className="part" key={index}>
                <img src="assets/icons/gym.png" alt="" />
                <h2>{part}</h2>
              </div>
            )
        })}
        </Slider>
  </div>
  )
}

'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import React from 'react'


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next" onClick={onClick} style={{
      cursor : "pointer"
    }}>
      <img src="assets/icons/right-arrow.png" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev"onClick={onClick} style={{
      cursor : "pointer"
    }}>
        <img src="assets/icons/left-arrow.png" alt="" />
    </div>
  );
  }

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 4,
      }
    }
  ]
};

export default function ShowExercises({main}) {
    const excercisesLimit  = 9 ;
    const [paginate , setpaginate] = useState(1 * excercisesLimit)
    const paginateHandler = (value) => {setpaginate(value * excercisesLimit)}
    let numOfPaginate ;
    if(main){
         numOfPaginate = Math.ceil(main.length / 9)
    }


// HANDLE SEARCH OPERATOIN
  return (
    <div className="showen">

    <div className="container">
    { main && main.slice(paginate - 9 ,paginate).map(item =>{

    return (
      <div className="box" key={item.id}>
        <img src="assets/images/basic.jpg"  loading="lazy" />
        <div className="flex">
          <h3> body part : {item.bodyPart}</h3>
          <h3> target muscle : {item.target}</h3>
        </div>
        <h1>{item.name}</h1>
      </div>
    )
  })}

    </div>
    <div className="paginate">
        <div className="container">
        <Slider {...settings}>
        {[...Array(numOfPaginate)].map((box , index)=>{
      return <p onClick={()=> paginateHandler(index+1)} key={index} type='button'  >{index +1}</p>
        })}
        </Slider>
        </div>
  </div>
  </div>
  )
}

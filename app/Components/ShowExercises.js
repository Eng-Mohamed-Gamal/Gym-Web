'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef, useState } from "react";
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

  // HANDLE PAHINATE SYSYTEM
    const excercisesLimit  = 9 ;
    const [paginate , setpaginate] = useState(1 * excercisesLimit)
    const paginateHandler = (value) => {setpaginate(value * excercisesLimit)}
    let numOfPaginate ;
    if(main){
         numOfPaginate = Math.ceil(main.length / 9)
    }
  // HANDLE PAHINATE SYSYTEM


  return (
    <div className="showen">

    <div className="container">
    {main.slice(paginate - 9 ,paginate).map(item =>{
    return (
      <div className="box" key={item.id}>
        <img src={item.gifUrl}  loading="lazy" />
        <div className="flex">
          <p> body part : {item.bodyPart}</p>
          <p> target muscle : {item.target}</p>
          <p>equipment : {item.equipment}</p>
        </div>
        <h1>{item.name}</h1>
      </div>
    )
  })}

    </div>
    <div className="paginate">
      <h1 className="cen">pages</h1>
        <div className="container" >
        {[...Array(numOfPaginate)].map((box , index)=>{
      return <p onClick={()=> paginateHandler(index+1)} key={index} type='button'  >{index +1}</p>
        })}
        </div>

  </div>
  </div>
  )
}

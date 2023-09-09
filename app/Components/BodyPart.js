'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import { fetchData , options } from "../FetchCostum";

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
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

export default function BodyPart({arr , setMain}) {

  const fetchByCategory = async (bodyPart) =>{

    if(bodyPart === "all"){
      const EXCERCISES = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,options);
      setMain(EXCERCISES)
    }else{
      const EXCERCISES = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,options);
      setMain(EXCERCISES)
    }
  }
   
  return (
    <div className="stage-3">
      <div className="container">
      <Slider {...settings}>
        { arr && arr.map((part , index)=>{        
            return (
                <div className="part" key={index} onClick={()=>fetchByCategory(part.toLowerCase())}>
                <img src="assets/icons/gym.png" alt="" />
                <h2>{part}</h2>
              </div>
            )
        })}
        </Slider>
      </div>
  </div>
  )
}

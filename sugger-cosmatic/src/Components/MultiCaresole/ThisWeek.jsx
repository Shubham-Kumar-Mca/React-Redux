import React from 'react'
import { Thisw } from '../../data';
import OnlyImageBoiler from './OnlyImageBoiler';
import Slider from "react-slick";
import "../Styles/slick.css"; 
import "../Styles/slickTheme.css";

const ThisWeek = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        {Thisw.map((item,index)=>(
          <OnlyImageBoiler item={item} key = {index}/>
        ))}
      </Slider>
    </>
  )
}

export default ThisWeek
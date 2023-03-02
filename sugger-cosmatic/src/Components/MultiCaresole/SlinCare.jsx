import React, { useEffect } from 'react'
import Slider from "react-slick";
import "../Styles/slick.css";
import "../Styles/slickTheme.css";
import BolierCode from './BolierCode';
import { skinCare } from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { grtProductsAPI } from '../../Redux/Product/product.action';

const SlinCare = () => {
    const dispatch = useDispatch();
    const {isLoading, isError, data} = useSelector(state => state.product);

    useEffect(()=>{
        dispatch(grtProductsAPI("skinCare"))
    },[])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                {data.map((item, index) => (
                    <BolierCode item={item} key={index} />
                ))}
            </Slider>;
        </>
    )
}

export default SlinCare
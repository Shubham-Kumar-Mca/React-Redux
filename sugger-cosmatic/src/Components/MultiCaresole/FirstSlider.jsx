import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { RxDot, RxDotFilled } from "react-icons/rx";
import { mainSlides } from '../../data';

const FirstSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? mainSlides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === mainSlides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <>
            <div className='CaresoleImage' style={{ backgroundImage: `url(${mainSlides[currentIndex].url})` }}></div>
            <div className='Arrow'>
                <div className='leftArrow arr'>
                    <AiOutlineLeft onClick={prevSlide} />
                </div>
                <div className='rightArrow arr'>
                    <AiOutlineRight onClick={nextSlide} />
                </div>
            </div>
            <div className='Dot'>
                {mainSlides.map((item, index) => (
                    currentIndex === index ? <RxDotFilled style={{ fontSize: "25px" }} key={index} /> : <RxDot onClick={() => goToSlide(index)} style={{ fontSize: "25px" }} key={index} />
                ))}
            </div>
        </>
    )
}

export default FirstSlider
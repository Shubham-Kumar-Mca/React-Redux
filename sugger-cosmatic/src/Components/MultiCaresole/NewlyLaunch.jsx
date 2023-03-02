import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { RxDot, RxDotFilled } from "react-icons/rx";
import { Newlylaunch } from '../../data';

const NewlyLaunch = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? Newlylaunch.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === Newlylaunch.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <>
            <div className='CaresoleImage' style={{ backgroundImage: `url(${Newlylaunch[currentIndex].url})`,borderRadius:"10px" }}></div>
            <div className='Arrow'>
                <div className='leftArrow arr'>
                    <AiOutlineLeft onClick={prevSlide} />
                </div>
                <div className='rightArrow arr'>
                    <AiOutlineRight onClick={nextSlide} />
                </div>
            </div>
            <div className='Dot'>
                {Newlylaunch.map((item, index) => (
                    currentIndex === index ? <RxDotFilled style={{ fontSize: "25px" }} key={index} /> : <RxDot onClick={() => goToSlide(index)} style={{ fontSize: "25px" }} key={index} />
                ))}
            </div>
        </>
    )
}

export default NewlyLaunch
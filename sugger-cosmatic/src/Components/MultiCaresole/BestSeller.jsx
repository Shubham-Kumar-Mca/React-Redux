import React, { useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineHeart } from "react-icons/ai";
// import { BestSeller } from '../../data';
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { grtProductsAPI } from '../../Redux/Product/product.action';


const Bestseller = () => {
    const dispatch = useDispatch();
    const {isLoading, isError, data} = useSelector(state => state.product);

    useEffect(()=>{
        dispatch(grtProductsAPI("BestSeller"))
    },[])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel responsive={responsive}>
                {data.map((item, index) => (
                    <div className='EachProduct' key={index}>
                        <div className='padding'>
                            <div>
                                <img src={item.img} width="100%" alt="" />
                            </div>
                            <div className='description'>
                                <p className='text'>{item.title}</p>
                                <h3 style={{display:"flex", alignItems:"center", justifyContent:"center"}}><FaRupeeSign />{item.price}</h3>
                            </div>
                        </div>
                        <div className='Btnpart mlr'>
                            <div className='heart'>
                                <AiOutlineHeart className='hearIcon' />
                            </div>
                            <div>
                                <button className='add'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>;
        </>
    )
}

export default Bestseller
import React from 'react'
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { postAddToCart } from '../../Redux/Cart/cart.action';

const BolierCode = ({ item }) => {
    const dispatch = useDispatch()


    const handelAddToCart = () =>{
        dispatch(postAddToCart(item))
    }
    return (
        <div className='EachProduct'>
            <div className='px-50'>
                <div>
                    <img src={item.img} width="100%" alt="" />
                </div>
                <div className='desc h'>
                    <p className='text'>{item.title}</p>
                </div>

            </div>
            <div className='r'>
                <div className='PriceSection'>
                    {item.discount ? <strike className="strike"><FaRupeeSign className='rupyaSymbole' /><span>{item.discount}</span></strike> : null}
                    <h3 className='priceSect'><FaRupeeSign />{item.price}</h3>
                    <p className="off">{item.off}</p>
                </div>
                {item.rating ? <div className='ratingPart'>
                    <AiFillStar />
                    <p>{item.rating}</p>
                </div> : null}

            </div>

            <div className='btnPart mlr'>
                <div className='heart'>
                    <AiOutlineHeart />
                </div>
                <div>
                    <button className='f-size' onClick={handelAddToCart}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default BolierCode
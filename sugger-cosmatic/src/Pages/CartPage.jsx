import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AllCart from '../Components/AllCart';
import { getCarts, updateData } from '../Redux/Cart/cart.action';

const CartPage = () => {
    const { addCart } = useSelector(store => store.cart)
    const dispatch = useDispatch()

    //Calculation Final Resut or Total
    const result = (CartData) => {
        return CartData.reduce((acc, element) => acc + element.price * element.qty, 0)
    }

   

    useEffect(() => {
        dispatch(getCarts())
    }, [])

    return (
        <>
            <div style={{ backgroundColor: "#fff", padding: "1rem 0" }}>
                {addCart && addCart.map((cart, index) => (
                    <AllCart key={index + 1} cart={cart} />
                ))}
            </div>
            <div className='total'>
                <h1>Total : {result(addCart)}</h1>
            </div>
        </>
    )
}

export default CartPage
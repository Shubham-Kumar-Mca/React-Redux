import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getCarts, removeData, updateData } from '../Redux/Cart/cart.action';
import "./Styles/AllCart.css"


const AllCart = ({ cart }) => {
    const { img, title, price, qty, id } = cart
    const dispatch = useDispatch();
    const [val, setVal] = useState(qty || 1)
    const navigate = useNavigate()

    // const cartData = useSelector(state => state.BookReducer.addCart)
    const { isLoading, isError, addCart } = useSelector(store => store.cart)

    const handelQty = (e) => {
        const { value } = e.target
        setVal(value)
        if (value >= 1) {
            setVal(e.target.value)

            addCart.forEach(el => {
                if (el.id === id) {
                    const newValue = { ...el, qty: Number(value) }
                    dispatch(updateData(id, newValue))
                }
            })
        }

    }


    console.log(typeof price);
    // Removing Cart data from id
    const handelRemovie = () => {
        dispatch(removeData(id))
    }



    // if(isLoading){
    //     return <h2>Loading...</h2>
    // }

    useEffect(() => {
        dispatch(getCarts())
    }, [dispatch])


    return (
        <div className="cart-section">
            <img src={img} alt={title} />
            <p>{title}</p>
            <input type="number" value={val} onChange={handelQty} />
            <p>{price}</p>
            <h4>Total : {qty * price}</h4>
            <button onClick={handelRemovie}>Remove</button>
        </div>
    )
}

export default AllCart
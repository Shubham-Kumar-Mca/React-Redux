import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarts, removeData, updateData } from '../Redux/AppData/action'

const AllCart = ({ cart }) => {
    const { id, cover_photo, category, price, qty } = cart
    const dispatch = useDispatch();
    const [val, setVal] = useState(qty || 1)

    const cartData = useSelector(state => state.BookReducer.addCart)

    const handelQty = (e) => {
        const { value } = e.target
        if (value >= 1) {
            setVal(e.target.value)

            cartData.forEach(el => {
                if (el.id === id) {
                    const newValue = { ...el, qty: Number(value) }
                    dispatch(updateData(id, newValue))
                }
            })
        }

    }

    useEffect(() => {
        dispatch(getCarts())
    }, [dispatch, val])



    //Removing Cart data from id
    const handelRemovie = () => {
        dispatch(removeData(id))
    }


    return (
        <div className="cart-section">
            <img src={cover_photo} alt="book_image" />
            <p>{category}</p>
            <input type="number" value={val} onChange={handelQty} />
            <p>{price}</p>
            <h4>Total : {qty * price}</h4>
            <button onClick={handelRemovie}>Remove</button>
        </div>
    )
}

export default AllCart
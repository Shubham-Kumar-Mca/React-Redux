import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarts } from '../Redux/AppData/action'
import AllCart from './AllCart'


const Cart = () => {
  const CartData = useSelector(state => state.BookReducer.addCart)
  const dispatch = useDispatch()

  //Calculation Final Resut or Total
  const result = (CartData) => {
    return CartData.reduce((acc, element) => acc + element.price * element.qty, 0)
  }

  useEffect(() => {
    dispatch(getCarts())
  }, [dispatch])

  return (
    <>
      <div>
        {CartData && CartData.map((cart, index) => (
          <AllCart key={index + 1} cart={cart} />
        ))}
      </div>
      <div className='total'>
        {/* Display final total */}
        <h1>Total : {result(CartData)}</h1>
      </div>
    </>
  )
}

export default Cart
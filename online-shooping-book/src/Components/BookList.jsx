import React from 'react'
import { useDispatch } from 'react-redux'
import { postAddToCart } from '../Redux/AppData/action'

const BookList = ({ bookData }) => {
  const dispatch = useDispatch()
  
  const handelAddToCart = () => {
    dispatch(postAddToCart(bookData))
  }

  return (
    <div className='singleBook'>
      <div>
        <img src={bookData.cover_photo} alt="" width="100%" height="250px" />
      </div>
      <div className='Book-Dertails'>
        <h4>{bookData.book_name}</h4>
        <p>{bookData.category}</p>
        <p>{bookData.release_year}</p>
      </div>
      <div>
        <button className='btn' onClick={handelAddToCart}>Add to cart</button>
      </div>
    </div>
  )
}

export default BookList
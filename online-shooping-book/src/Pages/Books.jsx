import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import BookFilter from '../Components/BookFilter'
import BookList from '../Components/BookList'
import { getBooks } from '../Redux/AppData/action'

const Books = () => {
  const books = useSelector(state => state.BookReducer.book);
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const location = useLocation()

  
  useEffect(() => {
    if (location || books.length === 0) {
      const sortBy = searchParams.get("sort")
      const getPrams = {
        params: {
          category: searchParams.getAll("category"),
          _sort : sortBy && "release_year",
          _order : sortBy
        },
      }
      dispatch(getBooks(getPrams))
    }
  }, [books.length, dispatch, location.search, searchParams]);


  return (
    <div className='Books-container'>
      <div className='BookFilter-container'>
        <BookFilter />
      </div>
      <div className='BookList-container'>
        {
          books && books.map(book => (
            <BookList key={book.id} bookData = {book} />
          ))
        }
      </div>
    </div>
  )
}

export default Books
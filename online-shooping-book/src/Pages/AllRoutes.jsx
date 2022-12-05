import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Books from './Books'
import Cart from './Cart'
import NotFound from './NotFound'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Books />} />
                <Route path='/cart' element = {<Cart />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
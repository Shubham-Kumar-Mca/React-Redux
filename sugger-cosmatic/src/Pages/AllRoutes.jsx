import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BrushPage from './BrushPage'
import CartPage from './CartPage'
import GiftingPage from './GiftingPage'
import HomePage from './HomePage'
import Makeup from './MakeupPage'
import OfferPage from './OfferPage'
import SkinPage from './SkinPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/makeup' element={<Makeup />} />
        <Route path='/blend-trend-makeup-brush' element={<BrushPage />} />
        <Route path='/skin-care-products' element={<SkinPage />} />
        <Route path='/collections/gifting' element={<GiftingPage />} />
        <Route path='/pages/offer' element={<OfferPage />} />
        <Route path='/cart' element = {<CartPage />}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
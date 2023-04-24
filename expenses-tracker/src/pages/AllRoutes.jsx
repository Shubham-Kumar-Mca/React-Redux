import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Login from './login/Login'
import Signup from './signup/Signup'
import Tracker from './tracker/Tracker'
import History from './history/History'
import Analytics from './analytics/Analytics'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='' element={<Tracker />} />
          <Route path='tracker' element={<Tracker />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='history' element={<History />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
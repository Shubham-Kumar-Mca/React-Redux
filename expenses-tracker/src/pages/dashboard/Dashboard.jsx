import React from 'react';
import style from "./dashboard.module.css"
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className={style.dashboardContainer}>
      <nav className={style.buttonSection}>
        <ul>
          <li><NavLink to="/tracker" style={({ isActive }) => ({ color: isActive ? "#088178" : "#1a1a1a" })}>Tracker</NavLink></li>
          <li><NavLink to="/analytics" style={({ isActive }) => ({ color: isActive ? "#088178" : "#1a1a1a" })}>Analytics</NavLink></li>
          <li><NavLink to="/history" style={({ isActive }) => ({ color: isActive ? "#088178" : "#1a1a1a" })}>History</NavLink></li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
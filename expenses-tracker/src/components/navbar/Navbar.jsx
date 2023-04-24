import React, { useEffect, useState } from 'react';
import style from "./Navbar.module.css"
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsersDataFromAPI } from '../../Redux/Auth/action';

const Navbar = () => {

    const [idLS, setIdFromLS] = useState({}); //set Id form LocalStorage to compare
    const [UsersData, setUsersData] = useState([])
    const dispatch = useDispatch()
    const [auth, setIsAuth] = useState(false)


    const handelFindCurrentUser = () => {
        const findCurrentUser = UsersData?.find(element => element.id === idLS.id) //Finding User from id
        // filterData(findCurrentUser?.userDetails.userData)
        setIsAuth(findCurrentUser?.isAuth)
    }



    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("currentUserLogin")) || {};
        setIdFromLS(id);

        dispatch(getUsersDataFromAPI()).then(res => {
            setUsersData(res)
        });
    }, []);

    useEffect(() => {
        handelFindCurrentUser()
    }, [UsersData])

    const handelClicking = () =>{
        if(auth){
            const findCurrentUser = UsersData?.find(element => element.isAuth === auth) 
            dispatch(updatingLoginData(findCurrentUser.id, {isAuth : false}))
        }
    }


    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? "#088178" : "#1a1a1a",

        }
    }
    return (
        <nav className={style.NavbarContainer}>
            <h2><Link to="/">Expense Tracker</Link></h2>
            <ul>
                <li><NavLink to="/" style={navLinkStyle}>Dashboard</NavLink></li>
                <li><NavLink to="/signup" style={navLinkStyle}>Signup</NavLink></li>
                <li onClick={handelClicking}><NavLink to="/login" style={navLinkStyle}>{auth ? "Logout" : "Login"}</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
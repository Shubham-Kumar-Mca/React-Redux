import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import "./Styles/header.css"
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const Header = () => {
    const [search, setsearch] = useState("");
    const {addCart} = useSelector(store=>store.cart)



    return (
        <div id='headerForLargeScreen'>
            <div className='Header'>
                <div className="Header__Logo">
                    <Link to="/">
                        <img className="img" src="https://i.ibb.co/4YG8LdY/Untitled.png" alt="Sugar Cosmetics Logo" />
                    </Link>
                </div>

                <div className="Header__Search">
                    <input id="searchItems" className="Header__Search__inputBox col-9 px-4" type="text" placeholder="Try Liquid Lipstick" value={search} onChange={(e) => setsearch(e.target.value)} />
                    <div className='search-icon py-2 col-2'>
                        <BsSearch />
                        <p> &nbsp;Search</p>
                    </div>
                </div>

                <div className="Header__Login">
                    <BiUserCircle style={{ fontSize: "20px" }} />
                    <Link className="Header__Login__P px-1 py-2">Login / Register</Link>
                </div>

                <div className="Header__LikeCart">
                    <div>
                        <Link>
                            <BsHeartFill style={{ color: "#fff", fontSize: "16px" }} />
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart" className="bag">
                            <FaShoppingBag style={{ color: "#fff", fontSize: "20px" }} />
                            {addCart.length==0?null:<><p>{addCart.length}</p></>}
                        </Link>
                    </div>
                    <div>
                        <TbDiscount2 style={{ color: "#fff", fontSize: "20px" }} />
                    </div>
                </div>
            </div>


            {/* Navbar */}

           <Navbar />
        </div>
    )
}

export default Header
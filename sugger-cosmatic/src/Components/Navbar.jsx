import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();
    const handelMakeup = ()=>{
        navigate("/makeup")
    }

    const handelBrush = ()=>{
        navigate("/blend-trend-makeup-brush")
    }

    const handelSkinCare = () =>{
        navigate("/skin-care-products")
    }

    const handelGifting = () =>{
        navigate("/collections/gifting")
    }
    
    const handelOffer = () =>{
        navigate("/pages/offer")
    }
    return (
        <div className='w-full d-flex justify-content-between' style={{ backgroundColor: "#141414" }}>
            <div className="col-8 px-3 d-flex justify-content-between navHeading">
                <div className='meniDropdown mx-4'>
                    <div className='navbarHeadings py-3' onClick={handelMakeup}>MAKEUP</div>

                    <div className='menuDropdownContent'>
                        <div className='anotherMenuDropdown level2'>
                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className="dropDownTitle">LIPS</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                <div>
                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>LIPSTICKS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>WONDER WOMAN LIPSTICK RANG</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>LIP CARE</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>LIQUID LIP COLOR</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>LIP GLOSS & LINERS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>VALUE SETS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>GIFTING</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className="dropDownTitle">FACE</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                <div>
                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>PRIMERS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>POWDER/COMPACT</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>FOUNDATION & BB CREAM</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>CONCEALERS & CORECTORS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>BLUSH</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>HIGHLIGHTERS & CONTOUR</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>BRONZER</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>FACEPALETTES</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>VALUE SETS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className="dropDownTitle">EYES</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                <div>
                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>EYELINERS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>KAJAL</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>EYEBROWS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>EYESHADOW</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>MASCARA</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>EYESHADOW PALETTES</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "#757575", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "#757575", fontSize: "12px" }}>VALUE SETS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='meniDropdown mx-4'>
                    <div className='navbarHeadings py-3' onClick={handelBrush}>BRUSHES</div>

                    <div className='menuDropdownContent'>
                        <div className="anotherMenuDropdown1 level2 d-flex">
                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>FACE BRUSHES</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>

                                <div>
                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>Blend Trend Face Brush - 001 Blush</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>Blend Trend Face Brush - 003 Contour</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>Blend Trend Face Brush - 006 Highlighter</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>Blend Trend Face Brush - 007 Powder</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>Blend Trend Foundation Brush - 052 Kabuki</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>Blend Trend Dual Face Brush - 075 Powder + Foundation</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>EYES BRUSHES</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>

                                <div>
                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>Blend Trend Eyeshadow Brush - 041 Flat</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>Blend Trend Eyeshadow Brush - 042 Round</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>Blend Trend Eyeshadow Brush - 043 Round Xl</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>Blend Trend Dual Eyeshadow Brush - 412 Flat + Round</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='meniDropdown mx-4'>
                    <div className='navbarHeadings py-3' onClick={handelSkinCare}>SKINCARE</div>

                    <div className='menuDropdownContent'>
                        <div className='anotherMenuDropdown level2'>
                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>MOISTURIZERS</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>SUNSCREEN</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>SETTING MISTS</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>COFFEE CULTURE RANGE</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>SHEET MASK COMBO</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>CITRUS GOT REAL RANGE</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>AQUAHOLIC RANGE</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>MASKS</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='meniDropdown mx-4'>
                    <div className='navbarHeadings py-3' onClick={handelGifting}>GIFTING</div>

                    <div className='menuDropdownContent'>
                        <div className='anotherMenuDropdown level2'>
                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>SUGAR MERCH STATION</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>MAKEUP KITS</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>BESTSELLERS</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>VALUE SETS</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>SUGAR SETS</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>E-GIFT CARDS</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='meniDropdown mx-4'>
                    <div className='navbarHeadings py-3'>BLOG</div>

                    <div className='menuDropdownContent'>
                        <div className='anotherMenuDropdown level2'>
                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>MAKEUP</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>

                                <div>
                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>FACE</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>EYES</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>LIPS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>BRIDES</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>NAILS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>HOW TO's</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>SKIN</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>

                                <div>
                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>SKIN TYPE</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>SKIN CONCERNS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>HOME REMEDIES & DIYs</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>HAIR</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>

                                <div>
                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>HAIR CARE</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>STYLING</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>HAIR COLOUR</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>LIFESTYLE</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>

                                <div>
                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>HEALTH & WELLNESS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>RRELATIONSHIPS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='px-1 py-1 mx-1 my-2 listWidth'>
                                <ul style={{ listStyle: "none", margin: "0.4rem", paddingLeft: "23px" }}>
                                    <li>
                                        <Link>
                                            <span className='d-flex flex-wrap suheadings'>
                                                <div className='dropDownTitle'>FASHION</div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>

                                <div>
                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>TRENDS</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul style={{ color: "rgb(117, 117, 117)", margin: "0.6rem" }}>
                                            <li>
                                                <Link>
                                                    <span className='level3 d-flex flex-wrap' style={{ color: "rgb(117, 117, 117)", fontSize: "12px" }}>CELEBRITIES</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='meniDropdown mx-4'>
                    <div className='navbarHeadings py-3' onClick={handelOffer}>OFFERS</div>
                </div>

                <div className='meniDropdown mx-4'>
                    <div className='navbarHeadings py-3'>STORES</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
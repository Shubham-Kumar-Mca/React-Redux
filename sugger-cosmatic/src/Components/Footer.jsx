import React from 'react'
import { Link } from 'react-router-dom'
import { CiYoutube } from "react-icons/ci";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { GrMail } from "react-icons/gr";

const Footer = () => {
    return (
        <>
            <div className='footerF mt-5'>
                <div className='title '>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl fz'>LET’S STAY IN TOUCH</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <p className='footer_desktop_static_line__1r4FT'>Get the latest beauty tips straight to your inbox. Can’t wait to connect!</p>
                <div className='footer_desktop_subscribe__qoHC_'>
                    <input type="text" placeholder='Enter Email' className='px-3' />
                    <button>SUBSCRIBE</button>
                </div>
                <br />
                <br />
                <br />
            </div>

            <div className='mainFooter px-5'>
                <footer className='footer_main'>
                    <div className="footer_circle">
                        <section>
                            <img src="https://in.sugarcosmetics.com/Footer_sugar_icon.svg" className='footer_desktop_sugar_icon__ibIzU' alt="SUGAR Cosmetics" />
                        </section>
                    </div>
                    <br />
                    <section className='social_icons'>
                        <span className='px-1'>
                            <div className='footer_desktop_rounded_circle__feah_'>
                                <FiFacebook />
                            </div>
                        </span>
                        <span className='px-1'>
                            <div className='footer_desktop_rounded_circle__feah_'>
                                <CiYoutube />
                            </div>
                        </span>
                        <span className='px-1'>
                            <div className='footer_desktop_rounded_circle__feah_'>
                                <FiTwitter />
                            </div>
                        </span>
                        <span className='px-1'>
                            <div className='footer_desktop_rounded_circle__feah_'>
                                <FiInstagram />
                            </div>
                        </span>
                        <span className='px-1'>
                            <div className='footer_desktop_rounded_circle__feah_'>
                                <GrMail />
                            </div>
                        </span>
                    </section>
                    <br />
                    <section className='BorderTop'>
                        <div className='parentInfo'>
                            <div className='inFo col-8'>
                                <div className='info_content'>
                                    <Link>Stores</Link>
                                </div>
                                <div className='info_content'>
                                    <Link>Terms & Conditions</Link>
                                </div>
                                <div className='info_content'>
                                    <Link>Returns</Link>
                                </div>
                                <div className='info_content'>
                                    <Link>FAQs</Link>
                                </div>
                                <div className='info_content'>
                                    <Link>About Us</Link>
                                </div>
                            </div>
                            <br />
                        </div>
                        <br />
                    </section>

                    <section className='BorderTop'>
                        <div className='pad'>
                            <div style={{ marginBottom: "28px" }}>
                                <h5 className='getInTouch'>GET IN TOUCH</h5>
                            </div>
                            <div className='insideGetInTouch'>
                                <div style={{ color: "#ffffff" }}>
                                    <div style={{ display: "flex" }}>
                                        <div className='fz' style={{ marginBottom: "18px" }}>Call us at</div>
                                    </div>

                                    <div className='info_content '>
                                        <div>
                                            <Link className='mail_link' style={{ color: "#999" }}>1800-209-9933</Link>
                                        </div>
                                    </div>

                                    <div style={{ color: "#969696", fontSize: "16px", marginTop: "10px", float:"left" }}>
                                        Monday to Friday : 9 AM to 7 PM
                                    </div>
                                </div>

                                <div className='fz' style={{ color: "#ffffff", textAlign: "left" }}>
                                    Support
                                    <p className='info_content mt-5'>
                                        <Link className='mail_link' style={{ color: "#999" }}>hello@sugarcosmetics.com</Link>
                                    </p>
                                </div>

                                <div style={{ color: "#ffffff", textAlign: "left" }}>
                                    Careers
                                    <div className='info_content mt-5'>
                                        <Link className='mail_link' style={{ color: "#999" }}>We're hiring!</Link>
                                    </div>
                                </div>

                                <div style={{ color: "#ffffff", textAlign: "left" }}>
                                    <Link className='mail_link' style={{ color: "#ffffff" }}>Press & Media</Link>
                                    <p className='info_content mt-5'>
                                        <Link className='mail_link' style={{ color: "#999" }}>pr@sugarcosmetics.com</Link>
                                    </p>
                                </div>
                                <br />

                                <div className='ins' style={{ color: "#ffffff", textAlign: "left" }}>
                                    <Link className='mail_link' style={{ color: "#ffffff" }}>Influencer Collab</Link>
                                    <p className='info_content mt-5 '>
                                        <Link className='mail_link ' style={{ color: "#999" }}>Join Us</Link>
                                    </p>
                                </div>
                            </div>
                            <br />
                        </div>
                    </section>

                    <div>
                        <section className='BorderTop'>
                            <div className='getTheApp'>
                                <div>
                                    <h5 style={{ color: "ffffff", fontSize: "18px", marginTop: "20px" }}>GET THE NEW SUGAR APP TODAY!</h5>
                                    <p style={{ color: "#969696", fontSize: "14px", marginTop: "5px" }}>Tap into a better shopping experience.</p>
                                </div>
                                <div style={{ paddingTop: "20px" }}>
                                    <Link>
                                        <img style={{ marginRight: "3px", height: "39px", width: "132px" }} src="https://in.sugarcosmetics.com/playstore.png" alt="playstore logo" />
                                    </Link>
                                </div>
                                <div style={{ paddingTop: "20px" }}>
                                    <Link>
                                        <img style={{ marginRight: "3px", height: "39px", width: "132px" }} src="https://in.sugarcosmetics.com/apple-store.png" alt="apple store logo" />
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>

            <div className='copyRightSection'>
                <section className='BorderTop'>
                    <br />
                    <div style={{ color: "#999999", textAlign: "center", fontSize: "14px" }}>
                        Copyright © 2022 SUGAR Cosmetics. All rights reserved.
                        <br />
                        <br />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer
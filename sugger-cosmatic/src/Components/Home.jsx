import React, { useEffect } from 'react'
import "./Styles/Home.css"
import Bestseller from './MultiCaresole/BestSeller';
import HotDels from './MultiCaresole/HotDels';
import JustIn from './MultiCaresole/JustIn';
import ThisWeek from './MultiCaresole/ThisWeek';
import BuyNow from './MultiCaresole/BuyNow';
import Gifting from './MultiCaresole/Gifting';
import SuperSaver from './MultiCaresole/SuperSaver';
import FirstSlider from './MultiCaresole/FirstSlider';
import NewlyLaunch from './MultiCaresole/NewlyLaunch';
import SlinCare from './MultiCaresole/SlinCare';
import SugarBeauty from './MultiCaresole/SugarBeauty';
import Merch from './MultiCaresole/Merch';
import Explore from './MultiCaresole/Explore';
import RecentView from './MultiCaresole/RecentView';
import { AiOutlineRight } from "react-icons/ai";


const Home = () => {
    
    return (
        <div>
            <div className='mainSlider'>
                <FirstSlider />
            </div>

            <div className='bestSeller'>
                <div className='bestS'>
                    <div className='title'>
                        <hr className='hrIS me-3' />
                        <h2 className='title'>BESTSELLERS</h2>
                        <hr className='hrIS ms-3' />
                    </div>
                    <div className='product'>
                        <Bestseller />
                    </div>
                </div>
            </div>

            <div className='hotDeals'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl'>HOT DEALS</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='HotDeals'>
                    <HotDels />
                </div>
            </div>

            <div className="justIn">
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl'>JUST IN</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='JustIn'>
                    <JustIn />
                </div>
            </div>

            <div className='shukarHai'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl'>SHUKAR HAI, SUGAR HAI</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='SukarHai'>
                    <img src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/b16a42b1-3e35-42bb-b122-a517e75c490e.jpg&w=1920&q=75" alt="SUGAR_HAI" />
                </div>
            </div>

            <div className='ThisWeek'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl'>TOP PICKS OF THE WEEK</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='thisWeek'>
                    <ThisWeek />
                </div>
            </div>

            <div className="Bynow">
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl'>BUY NOW PAY LATER</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='JustIn'>
                    <BuyNow />
                </div>
            </div>

            <div className='Gifting'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl'>GIFTING</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='JustIn'>
                    <Gifting />
                </div>
            </div>

            <div className='referYouFrd'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl'>SHUKAR HAI, SUGAR HAI</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='ReferYouFrd mt-2'>
                    <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8bfe8bb4-002d-4097-a773-6af33325a594.jpg&w=1920&q=75" alt="Refer_Your_Frd" />
                </div>
            </div>

            <div className='Super-savers'>
                <div className='Super-BgImage'>
                    <div className='title'>
                        <hr className='hrIS me-3' />
                        <h2 className='title'>SUPER SAVERS</h2>
                        <hr className='hrIS ms-3' />
                    </div>
                    <div className='product'>
                        <SuperSaver />
                    </div>
                </div>
            </div>

            <div className='newly-Launch'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='title' style={{ color: "black" }}>NEWLY LAUNCHED</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='newlyLaunch'>
                    <NewlyLaunch />
                </div>

            </div>

            <div className='thisOrThat'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='title' style={{ color: "black" }}>THIS OR THAT</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='This'>
                    <div>
                        <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7869ecd2-e867-443e-8116-fcbef55cacd8.jpg&w=1920&q=75" alt="" />
                    </div>
                    <div>
                        <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fcd4ea1cf-e663-4cd8-8ff0-fdd91012a232.jpg&w=1920&q=75" alt="" />
                    </div>
                </div>
            </div>

            <div className='Skin-care'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='title' style={{ color: "black" }}>SKINCARE BASICS</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='JustIn'>
                    <SlinCare />
                </div>
            </div>

            <div className='ThisWeek'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl'>SUGAR BEAUTY BLOG</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='thisWeek'>
                    <SugarBeauty />
                </div>
            </div>

            <div className='Skin-care'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='title' style={{ color: "black" }}>MERCH STATION</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='JustIn'>
                    <Merch />
                </div>
            </div>

            <div className='ThisWeek'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl'>EXPLORE</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='thisWeek'>
                    <Explore />
                </div>
            </div>

            <div className='RecentView'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl'>RECENTLY VIEWED</h2>
                    <hr className='hrIS ms-3' />
                </div>
                <div className='recentView'>
                    <RecentView />
                </div>
            </div>

            <div className='BihHr foot'>
                <hr className='onlyHr'/>
                <div className='mt-3 about py-3'>
                    <div >READ MORE ABOUT SUGAR Cosmetics</div>
                    <AiOutlineRight className='arrowIcon'/>
                </div>
            </div>

            {/* <footer>
                <Footer />
            </footer> */}


        </div>
    )
}

export default Home


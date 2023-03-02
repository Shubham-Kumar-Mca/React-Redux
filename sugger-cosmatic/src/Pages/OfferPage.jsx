import React, { useEffect } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { MdOutlineContentCopy } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { grtProductsAPI } from '../Redux/Product/product.action';


const OfferPage = () => {
    const dispatch = useDispatch();
    const {isError, isLoading, data} = useSelector(state => state.product);



    useEffect(() => {
        dispatch(grtProductsAPI("Offers"))
    }, [])
    return (
        <div>
            <div>
                <div className='d-flex mainho mb-3 '>
                    <div className='d-flex pata'>
                        <div className='homeLink'>
                            <Link to="/" className="homeLink link">Home</Link>
                        </div>
                        <div className='d-flex'>
                            <div className='homeLink px-2'><BiChevronRight className='rArr' /></div>
                            <div className='homeLink'>
                                <Link to="/pages/offer"><span className='makupSpan'>Offers</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='offer'>
                <div className='title'>
                    <hr className='hrIS me-3' />
                    <h2 className='clor-bl'><span className='fz'>OFFERS</span></h2>
                    <hr className='hrIS ms-3' />
                </div>
            </div>

            <div>
                {isLoading && !isError && <h2 style={{ textAlign: "center", marginBottom:"10px" }}>Loading.....</h2>}
                {!isLoading && isError && <h2 style={{ textAlign: "center", marginBottom:"10px" }}>Error.....</h2>}
            </div>

            <div className='OfferS'>
                {data.map((item, i) => (
                    <div key={i} className="insideOffer">
                        <img src={item.img} alt="" />
                        <div className='cupan'>
                            <p className='border-rigth'>{item.cupanId}</p>
                            <button className='pd'><MdOutlineContentCopy /></button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OfferPage
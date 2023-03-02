import React, { useEffect, useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import BolierCode from '../Components/MultiCaresole/BolierCode'
import { grtProductsAPI } from '../Redux/Product/product.action'

const BrushPage = () => {
    const [searchPramas, setSearchParams] = useSearchParams()
    const initialProductType = searchPramas.getAll("category")
    const initialSort = searchPramas.get("sort")
    const location = useLocation()

    //From Redux
    const dispatch = useDispatch();
    const {isLoading, isError, data} = useSelector(state => state.product);
    
    // Using useState For productType (Eyeshadow Brush, Face Brush, Foundation Brush, Brush Combo) and Sorting (Price Low To High && High To Low)
    const [productType, setProductType] = useState(initialProductType || [])
    const [sort, setSort] = useState(initialSort || "")

    // Multiple Product Type (Category)
    const handleInputChange = (e) =>{
        const newProductType = [...productType];
        if(newProductType.includes(e.target.value)){
            newProductType.splice(newProductType.indexOf(e.target.value),1)
        }else{
            newProductType.push(e.target.value)
        }
        setProductType( newProductType)
    }

    // Assending and Desinding
    const handelSorting = (e) =>{
        setSort(e.target.value)
    }

    // Params
    useEffect(()=>{
        const params = {};
        params.category = productType
        sort && (params.sort = sort)
        setSearchParams(params)
    },[setSearchParams, productType, sort])


    // Sorting And Filtering
    useEffect(() => {
        if(location || data.length === 0){
            const getParams = {
                params : {
                    productType : initialProductType,
                    _sort : initialSort && "price",
                    _order : initialSort
                },
            }
            dispatch(grtProductsAPI("BrushData",getParams))
        }
    }, [dispatch, data.length, location.search, searchPramas])

    return (
        <>
            <div className='position-relative my-4 pt-1 false'>
                <img className='bannerImage blurImage' src="https://d32baadbbpueqt.cloudfront.net/Collection/39da2bc6-d83c-4350-a2b1-0c0ec7a721a8.jpg" alt="banner_image" />

                <img className='container main' src="https://d32baadbbpueqt.cloudfront.net/Collection/39da2bc6-d83c-4350-a2b1-0c0ec7a721a8.jpg" alt="banner_image" />
            </div>

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
                                    <Link to="/blend-trend-makeup-brush"><span className='makupSpan'>Blend trend makeup brush</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {isLoading && !isError && <h2 style={{ textAlign: "center", marginBottom:"10px" }}>Loading.....</h2>}
                    {!isLoading && isError && <h2 style={{ textAlign: "center", marginBottom:"10px" }}>Error.....</h2>}
                </div>

                <div className='d-flex pt-5 gap all'>
                    <div className='leftSide'>
                        <div className='sorting'>
                            <div className='sorH'>
                                <h4>Sort By: </h4>
                                {/* <p className='s'>Price: Low To High</p> */}
                            </div>
                            <hr className='onlyHr' />
                            <div>
                                <div className='radioB'>
                                    <input type="radio" className='rad' name="sorting" value="desc" onChange={handelSorting} checked = {sort ==="desc"} />
                                    <p>Price: High To Low</p>
                                </div>
                                <div className='radioB'>
                                    <input type="radio" className='rad' name="sorting" value="asc" onChange={handelSorting} checked = {sort ==="asc"} />
                                    <p>Price: Low To High</p>
                                </div>
                            </div>

                        </div>

                        <div className="Filter">
                            <div className='filter'>
                                <h4>Filters: </h4>
                                {/* <p className='s'>Price: Low To High</p> */}
                            </div>
                            <hr className='onlyHr' />
                            <div>
                                <div className='checkBox'>
                                    <input type="checkbox" value="Eyeshadow_Brush" checked = {productType.includes("Eyeshadow_Brush")} className='che' name="sorting" onChange={handleInputChange}/>
                                    <p>Eyeshadow Brush</p>
                                </div>
                                <div className='checkBox'>
                                    <input type="checkbox" value="Face_Brush" checked = {productType.includes("Face_Brush")} className='che' name="sorting" onChange={handleInputChange}/>
                                    <p>Face Brush</p>
                                </div>
                                <div className='checkBox'>
                                    <input type="checkbox" value="Foundation_Brush" checked = {productType.includes("Foundation_Brush")} className='che' name="sorting" onChange={handleInputChange}/>
                                    <p>Foundation Brush</p>
                                </div>
                                <div className='checkBox'>
                                    <input type="checkbox" value="Brush_Combo" checked = {productType.includes("Brush_Combo")} className='che' name="sorting" onChange={handleInputChange}/>
                                    <p>Brush Combo</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='rigth'>
                        {data.map((e, index) => (
                            <BolierCode item={e} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrushPage
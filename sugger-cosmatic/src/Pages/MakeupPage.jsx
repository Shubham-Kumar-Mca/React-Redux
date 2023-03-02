import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { BiChevronRight } from "react-icons/bi";
import BolierCode from '../Components/MultiCaresole/BolierCode';
import { AiOutlineRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { grtProductsAPI } from '../Redux/Product/product.action';

const Makeup = () => {
  const [searchPramas, setSearchParams] = useSearchParams()
  const initialSort = searchPramas.get("sort")
  const location = useLocation()
  const [sort, setSortBy] = useState(initialSort || "");

  //From Redux
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector(state => state.product);
  
  const handelSort = (e) => {
    setSortBy(e.target.value)
  }

  // Params
  useEffect(() => {
    const params = {};
    sort && (params.sort = sort)
    setSearchParams(params)
  }, [setSearchParams, sort])


  // Sorting (Low to High && High to Low)
  useEffect(() => {
    if (location || data.length === 0) {
      const getParams = {
        params: {
          _sort: initialSort && "price",
          _order: initialSort
        },
      }
      dispatch(grtProductsAPI("makupPage", getParams))
    }
  }, [dispatch, data.length, location.search, initialSort])

  return (
    <>
      <div className='position-relative my-4 pt-1 false'>
        <img className='bannerImage blurImage' src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg" alt="banner_image" />

        <img className='container main' src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg" alt="banner_image" />
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
                  <Link to="/makeup"><span className='makupSpan'>Makeup</span></Link>
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
                  <input type="radio" className='rad' name="SortBy" value="desc" onChange={handelSort} defaultChecked={sort === "desc"} />
                  <p>Price: High To Low</p>
                </div>
                <div className='radioB'>
                  <input type="radio" className='rad' name="SortBy" value="asc" onChange={handelSort} defaultChecked={sort === "asc"} />
                  <p>Price: Low To High</p>
                </div>
              </div>

            </div>

          </div>

          <div className='rigthSide'>

            {data?.map((e, index) => (
              <BolierCode item={e} key={index} />
            ))}

          </div>
        </div>
      </div>

      <div className='BihHr'>
        <div className='mt-3 about py-3' style={{ backgroundColor: "white" }}>
          <div className='foot'>READ MORE ABOUT MAKEUP</div>
          <AiOutlineRight className='arrowIcon' />
        </div>
      </div>
    </>
  )
}

export default Makeup
import React, { useEffect, useState } from 'react';
import style from "./History.module.css"
import { TbEdit } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { getUsersDataFromAPI, updateUserDataAfterHistoryDeleting } from '../../Redux/Auth/action';

const History = () => {
  const [datas, setDatas] = useState([]);
  const [selectType, setSelectType] = useState("");
  const id = JSON.parse(localStorage.getItem("currentUserLogin"));
  const [idLS] = useState(id); //set Id form LocalStorage to compare
  const dispatch = useDispatch();
  const users = useSelector(state=>state.AuthReducer.gettingData)


  //calculating 
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = datas?.slice(startIndex, endIndex);


  const hadelSelectFilter = (e) => {
    setSelectType(e.target.value)
    if (e.target.value === "") {
      setDatas(datas)
    } else {
      const filteredData = datas.filter(data => data.type === e.target.value);
      setDatas(filteredData)
    }

  }


  const handelHistoryDelete = (index) => {
    const afterDeleted = datas.filter((_, i) => i != index);
    setDatas(afterDeleted);
    const findCurrentUserIndex = users.findIndex(element => element.id === idLS.id);
    const updatedUser = { ...users[findCurrentUserIndex], userDetails: { ...users[findCurrentUserIndex].userDetails, userData: afterDeleted } };
    dispatch(updateUserDataAfterHistoryDeleting(idLS.id, updatedUser))
  }

  const handelHistoryEdit = (index) => {

  }

  const handelFindCurrentUser = () => {
    const findCurrentUser = users?.find(element => element.id === idLS?.id) //Finding User from id
    setDatas(findCurrentUser?.userDetails.userData)
  }

   

  useEffect(() => {
    handelFindCurrentUser()
  }, [users])


  /* Previous and Next button Cliking */

  const handelPrevClicking = () =>{
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handelNextClicking = () =>{
    if(currentPage < datas.length / itemsPerPage){
      setCurrentPage(currentPage + 1)
    }
  }


  return (
    <div>
      <div className={style.selectTag}>
        <select name="" value={selectType} onChange={hadelSelectFilter}>
          <option value="">Select Type</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
      <div className={style.historySection}>
        {currentData?.map((data, index) => (
          <div key={index} className={style.singleHistory}>
            <div className={style.leftSide}>
              <div className={style.emptyBox}></div>
              <div>
                <p>{data.category}</p>
                <p>{data.type}</p>
              </div>
            </div>
            <div className={style.rSide}>
              {data.type === "Income" ? <p style={{ color: "#87cf8e" }}>+ {data.amount}</p> : <p style={{ color: "#f78ea2" }}>- {data.amount}</p>}
              <div className={style.icon}>
                <TbEdit onClick={() => handelHistoryEdit(index)} />
                <ImCross onClick={() => handelHistoryDelete(index)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {datas?.length > 0 ? <>
        <div className={style.buttonSec}>
          <button onClick={handelPrevClicking} disabled = {currentPage === 1}>Prev</button>
          <p>{currentPage}</p>
          <button onClick={handelNextClicking} disabled = {currentPage === Math.ceil(datas.length / itemsPerPage)}>Next</button>
        </div>
      </>
        : <h2 style={{textAlign:"center"}}>No History Available!</h2>}
    </div>
  )
}

export default History
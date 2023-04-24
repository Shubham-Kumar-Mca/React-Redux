import React, { useEffect, useState } from 'react';
import style from "./analytics.module.css"
import Income from '../../components/income/Income';
import Expense from '../../components/expense/Expense';
import { getUsersDataFromAPI } from '../../Redux/Auth/action';
import { useDispatch, useSelector } from 'react-redux';

const Analytics = () => {
  const dispatch = useDispatch();
  const id = JSON.parse(localStorage.getItem("currentUserLogin"))
  const [idLS] = useState(id); //set Id form LocalStorage to compare
  const users = useSelector(state=>state.AuthReducer.gettingData)

  const [onlyIncomeData, setOnlyIncomeData] = useState([]);
  const [onlyExpenseData, setOnlyExpenseData] = useState([]);

  const filterData = (data) => {
    const filteredIncomeData = data?.filter(item => item.type === "Income")
    const filteredExpenseData = data?.filter(item => item.type === "Expense")
    setOnlyIncomeData(filteredIncomeData)
    setOnlyExpenseData(filteredExpenseData)
  }

  const handelFindCurrentUser = () => {
    const findCurrentUser = users?.find(element => element.id === idLS?.id) //Finding User from id
    filterData(findCurrentUser?.userDetails.userData)
  }


  useEffect(() => {
    // dispatch(getUsersDataFromAPI()).then(res => {
    //   setUsersData(res)

    // });

    dispatch(getUsersDataFromAPI())

  }, []);

  useEffect(() => {
    handelFindCurrentUser()
  }, [users])

  return (
    <div className={style.analyticsContainer}>
      {onlyIncomeData === undefined ? <h2>Loading...</h2> : onlyIncomeData.length > 0 ? <Income incomeData={onlyIncomeData} /> : <h2>Loading...</h2>}
      {onlyExpenseData === undefined ? <h2>Loading...</h2> : onlyExpenseData.length > 0 ? <Expense expenseData={onlyExpenseData} /> : <h2>Loading...</h2>}
    </div>
  )
  
}

export default Analytics
// incomeData = {data?.filter(item => item.type === "Income")}
// expenseData = {data?.filter(item => item.type === "Expense")}

import React, { useEffect, useState } from 'react';
import style from "./Tracker.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getUsersDataFromAPI, updatingLoginData } from '../../Redux/Auth/action';

const initialData = {
  type: "",
  category: "",
  amount: "",
  date: ""
}

const Tracker = () => {
  const [formData, setFormData] = useState(initialData); // State to hold form data
  const [category, setCategory] = useState([]) // Category options based on selected Type
  const [idLS, setIdFromLS] = useState({}); //set Id form LocalStorage to compare
  const dispatch = useDispatch();
  const Users = useSelector(store=>store.AuthReducer.gettingData);


  // Handler for form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const findCurrentUser = Users.find(element => element.id === idLS.id) //Finding User from id
    const {userDetails} = findCurrentUser
    userDetails.userData.push(formData)
    dispatch(updatingLoginData(idLS.id, {userDetails}))
    setFormData(initialData); // Reset form data
  };


  useEffect(() => {
    const categoryOptions = formData.type === "Income" ? ["Salary", "Gifts", "Refunds", "Other"] : ["Food & Drinks", "Shopping", "Housing", "Bills", "Vehicle & Transport", "Lifestyle"];
    setCategory(categoryOptions)
  }, [formData.type])

  useEffect(() => {
    dispatch(getUsersDataFromAPI())
    const id = JSON.parse(localStorage.getItem("currentUserLogin"));
    setIdFromLS(id)
  }, [])


  return (
    <div className={style.trackerSection}>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="">Type</label>
          <select name="type" value={formData.type} onChange={handleInputChange} required>
            <option value="">Select Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Category</label>
          <select name="category" value={formData.category} onChange={handleInputChange} required>
            <option value="">Select Category</option>
            {category.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="amount">Amount in Rupees</label>
          <input type="text" name='amount' value={formData.amount} onChange={handleInputChange} required/>
        </div>

        <div>
          <label htmlFor="amount">Date</label>
          <input type="date" name='date' value={formData.date} onChange={handleInputChange} required/>
        </div>

        <input type="submit" value="Create" />
      </form>
    </div>
  )
}

export default Tracker
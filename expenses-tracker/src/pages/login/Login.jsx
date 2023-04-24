import React, { useEffect, useState } from 'react';
import style from "./login.module.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersDataFromAPI, updatingLoginData } from '../../Redux/Auth/action';

const initialState = {
  email: '',
  password: '',
  errors: {
    email: '',
    password: '',
  },
};

const Login = () => {
  const [userLogin, setUserLogin] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Users = useSelector(store=>store.AuthReducer.gettingData)

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    
    let isValid = true;
    const errors = {};

    if (!userLogin.email) {
      errors.email = 'Please Enter Email Id';
      isValid = false;
    }

    if (!userLogin.password) {
      errors.password = 'Please Enter Password';
      isValid = false;
    } else if (userLogin.password.length < 8) {
      errors.password = 'Password must be at least 8 characters.';
      isValid = false;
    }else {
      const checkingVali = Users.find(user => user.userDetails.email === userLogin.email);
      if (!checkingVali) {
        alert("Email and password do not match. Please sign up first!");
        navigate("/signup");
      }else if(checkingVali.userDetails.password !== userLogin.password){
        if(checkingVali.userDetails.email === userLogin.email){
          errors.password = 'Password is incorrect. Please try again';
          isValid = false;
        }else{
          errors.email = 'Email Id is incorrect. Please try again';
          isValid = false;
        }
      }else{
        alert("Login Sucessfull!");
        localStorage.setItem("currentUserLogin", JSON.stringify({id : checkingVali.id}))
        dispatch(updatingLoginData(checkingVali.id, {isAuth : true}))
        navigate("/");
      }
    }
    setUserLogin({ ...userLogin, errors });
  };

  useEffect(()=>{
    dispatch(getUsersDataFromAPI())
  },[])



  return (
    <div className={style.loginContainer}>
      <form onSubmit={handelSubmit}>
        <div>
          <label>Your Email</label>
          <input type="text" placeholder="Enter email..." name="email" value={userLogin.email} onChange={handelInputChange} />
          {userLogin.errors.email && <p className={style.pTag}>{userLogin.errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter password..." name="password" value={userLogin.password} onChange={handelInputChange} />
          {userLogin.errors.password && (
            <p className={style.pTag}>{userLogin.errors.password}</p>
          )}
        </div>
        <div className="singInBtn">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}

export default Login
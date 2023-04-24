import React, { useState } from 'react';
import style from "./signup.module.css";
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom';
import { getSignupAPI } from '../../Redux/Auth/action';
import { useDispatch } from 'react-redux';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  errors: {
    fullName: '',
    email: '',
    password: '',
  },
};

const Signup = () => {
  const [userSignup, setUserSignUp] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setUserSignUp({ ...userSignup, [name]: value });
  };

  const insertUserUser = (newUser) =>{
    dispatch(getSignupAPI(newUser));
    alert("Signup Sucessfully Done!")
    navigate("/login");
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const errors = {};

    if (!userSignup.fullName) {
      errors.fullName = 'Please Enter Full Name';
      isValid = false;
    }

    if (!userSignup.email) {
      errors.email = 'Please Enter Email Id';
      isValid = false;
    }

    if (!userSignup.password) {
      errors.password = 'Please Enter Password';
      isValid = false;
    }else if(userSignup.password.length < 8){
      errors.password = 'Password must be at least 8 characters.';
      isValid = false;
    }

    setUserSignUp({ ...userSignup, errors });
    if(isValid){
      const newUser = {
        id : nanoid(),
        fullName : userSignup.fullName,
        email : userSignup.email,
        password : userSignup.password,
        userData : []
      }
      insertUserUser(newUser);
      setUserSignUp(initialState)
    }
  };

  return (
    <div className={style.singupContainer}>
      <form onSubmit={handelSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" autoComplete='off'  placeholder="Enter Full Name..." name="fullName" value={userSignup.fullName} onChange={handelInputChange}/>
          {userSignup.errors.fullName && <p className={style.pTag}>{userSignup.errors.fullName}</p>}
        </div>

        <div>
          <label>Email</label>
          <input type="text" autoComplete='off' placeholder="Enter Email..." name="email" value={userSignup.email} onChange={handelInputChange}/>
          {userSignup.errors.email && <p className={style.pTag}>{userSignup.errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <input type="text" autoComplete='off' placeholder="Enter Password..." name="password" value={userSignup.password} onChange={handelInputChange}/>
          {userSignup.errors.password && <p className={style.pTag}>{userSignup.errors.password}</p>}
        </div>

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  )
}

export default Signup
import React from 'react';
import commonStyles from '../../CommonStyles/CommonStyles.module.scss'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import AuthService from '../../http/Services/AuthService';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/reducers/userActions';
import AlertBox from '../AlertBox/AlertBox';

const SignUpComponent = () => {
  const userEmail = useRef("")
  const userPassword = useRef("")
  const userBirthDate = useRef("")
  const userName = useRef("")
  const dispatch = useDispatch();
  const { errors, status } = useSelector(state => state.userReducer)
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(userEmail.current.value, userPassword.current.value, userBirthDate.current.value, userName.current.value,))
  }
  return (
    <>
      <h2>You are almost ready to hang with your friends! Just choose a strong password!</h2>
      <form onSubmit={clickHandler}>
        <input ref={userEmail} type="text" placeholder='Email address' required={true} />
        <input ref={userPassword} type="password" placeholder='Password' required={true} />
        <input ref={userBirthDate} type="number" placeholder='Age' required={true} />
        <input ref={userName} type="text" placeholder='Name' required={true} />
        {status.length > 0 && <AlertBox message={status} alertType="success" />}
        {errors.length > 0 && <AlertBox message={errors} alertType="error" />}
        <div className={commonStyles.buttonContainer}>
          <button type="submit" >Sign Up</button>
          <Link to="/">Already have an account? Sign In</Link>
        </div>
      </form>
    </>
  );
};

export default SignUpComponent;
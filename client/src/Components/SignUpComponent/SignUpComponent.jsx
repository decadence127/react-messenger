import React from 'react';
import styles from './SignUpComponent.module.scss';
import commonStyles from '../../CommonStyles/CommonStyles.module.scss'

const SignUpComponent = () => {


  const clickHandler = (e) => {
    e.preventDefault();
    console.log('auth');
  }
  return (
    <>
      <h2>You are almost ready to hand with your friends! Just choose a strong password!</h2>
      <form onSubmit={clickHandler}>
        <input type="text" placeholder='Email address' required="true" />
        <input type="text" placeholder='Password' required="true" />
        <input type="text" placeholder='Date of birth' required="true" />
        <input type="text" placeholder='Name' required="true" />
        <div className={commonStyles.buttonContainer}>
          <button type="submit" >Sign Up</button>
          <a href="/">Already have an account? Sign In</a>
        </div>
      </form>
    </>
  );
};

export default SignUpComponent;
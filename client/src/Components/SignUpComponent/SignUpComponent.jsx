import React from 'react';
import styles from './SignUpComponent.module.scss'


const SignUpComponent = () => {
  const clickHandler = () => {
    console.log('helo');
  }
  return (
    <>
      <h2>Messenger makes it easy and fun to stay close to your favourite people.</h2>
      <input type="text" placeholder='Email address' />
      <input type="text" placeholder='Password' />
      <div className={styles.buttonContainer}>
        <button onClick={clickHandler} >Sign Up</button>
        <a href="/">Already have an account? Sign In</a>
      </div>

    </>
  );
};

export default SignUpComponent;
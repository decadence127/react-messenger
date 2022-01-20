import React from 'react';
import styles from './SignUpComponent.module.scss'


const SignUpComponent = () => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log('helo');
  }
  return (
    <>
      <h2>Messenger makes it easy and fun to stay close to your favourite people.</h2>
      <form onSubmit={clickHandler}>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Password' />
        <div className={styles.buttonContainer}>
          <button type="submit" >Sign Up</button>
          <a href="/auth">Already have an account? Sign In</a>
        </div>
      </form>
    </>
  );
};

export default SignUpComponent;
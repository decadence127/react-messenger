import React from 'react';
import styles from '../../CommonStyles/CommonStyles.module.scss'


const SignInComponent = () => {
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
          <button type="submit" >Sign In</button>
          <a href="/auth">Don't have an account yet? Sign Up</a>
        </div>
      </form>
    </>
  );
};

export default SignInComponent;
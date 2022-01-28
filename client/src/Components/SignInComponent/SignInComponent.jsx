import React from 'react';
import styles from '../../CommonStyles/CommonStyles.module.scss'


const SignInComponent = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const clickHandler = () => {

  }

  return (
    <>
      <h2>Messenger makes it easy and fun to stay close to your favourite people.</h2>
      <form onSubmit={clickHandler}>
        <input
          type="text"
          placeholder='Email address'
          value={email}
          onChange={e => setEmail(e.target.value)} />

        <input
          type="text"
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)} />

        <div className={styles.buttonContainer}>
          <button type="submit" >Sign In</button>
          <a href="/auth">Don't have an account yet? Sign Up</a>
        </div>
      </form>
    </>
  );
};

export default SignInComponent;
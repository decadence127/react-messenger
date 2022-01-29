import React, { useEffect } from 'react';
import styles from '../../CommonStyles/CommonStyles.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import AuthService from '../../http/Services/AuthService';
import { loginUser } from '../../store/reducers/userSlice';


const SignInComponent = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { userData, isLoading, errors } = useSelector(state => state.userReducer)

  const clickHandler = async (e) => {
    e.preventDefault()

    dispatch(loginUser(email, password))
    console.log(userData);
    console.log(errors);
  }

  useEffect(() => console.log('rerendered'))
  return (
    <>
      {isLoading && <h1>Loading</h1>}
      <h2>Messenger makes it easy and fun to stay close to your favourite people.</h2>
      <form onSubmit={clickHandler}>
        <input
          type="text"
          placeholder='Email address'
          value={email}
          onChange={e => setEmail(e.target.value)} />

        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)} />

        <div className={styles.buttonContainer}>
          <button type="submit" >Sign In</button>
          <Link to='/auth'>Don't have an account yet? Sign Up</Link>
        </div>
      </form>
    </>
  );
};

export default SignInComponent;
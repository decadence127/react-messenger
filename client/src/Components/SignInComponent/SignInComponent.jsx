import React from 'react';
import styles from '../../CommonStyles/CommonStyles.module.scss'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../../store/reducers/userActions";
import Loading from '../Loading/Loading';
import AlertBox from '../AlertBox/AlertBox';
import { useEffect } from 'react';

const SignInComponent = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { userData, isLoading, errors } = useSelector(state => state.userReducer)

  const clickHandler = async (e) => {
    e.preventDefault()

    dispatch(loginUser(email, password))

  }
  useEffect(() => {
    if (userData.accessToken) {
      history.push('/message')
    }
  }, [userData])

  return (
    <>
      {isLoading && <Loading />}
      <h2>Messenger makes it easy and fun to stay close to your favourite people.</h2>
      <form onSubmit={clickHandler}>
        <input
          required={true}
          type="text"
          placeholder='Email address'
          value={email}
          onChange={e => setEmail(e.target.value)} />

        <input
          required={true}
          type="password"
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)} />

        {errors.length > 0 && <AlertBox message={errors} alertType='error' />}
        <div className={styles.buttonContainer}>
          <button type="submit" >Sign In</button>
          <Link to='/auth'>Don't have an account yet? Sign Up</Link>
        </div>
      </form>
    </>
  );
};

export default SignInComponent;
import React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/large_messengerr_0.png'
import { useHistory } from 'react-router-dom'
import { HOME_ROUTE, AUTH_ROUTE, MESSAGES_ROUTE } from '../../routes/routeNames'
import Searchbar from '../Searchbar/Searchbar';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from "../../store/reducers/userActions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.userReducer)

  const logoutHandler = () => {
    dispatch(logoutUser(userData.user.userId))
    history.push(HOME_ROUTE)
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imgContainer} onClick={e => history.push('/as')}>
          <img src={logo} alt="React messenger" />
        </div>
        <div>
          <Searchbar />
          {
            userData.isAuth ? (
              <><button onClick={e => { history.push(MESSAGES_ROUTE) }}> Messages</button>
                <button onClick={logoutHandler}> Log out</button></>) : (<>
                  <button onClick={e => { history.push(HOME_ROUTE) }}> Home</button>
                  <button onClick={e => { history.push(AUTH_ROUTE) }}> Sign Up</button>
                </>)
          }
        </div>
      </header>
    </>
  );
};

export default Header;
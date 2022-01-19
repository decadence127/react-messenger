import React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/large_messengerr_0.png'
import { useHistory } from 'react-router-dom'
import { HOME_ROUTE, AUTH_ROUTE } from '../../routes/routeNames'
import Searchbar from '../Searchbar/Searchbar';

const Header = () => {
  const history = useHistory();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.imgContainer} onClick={e => history.push('/as')}>
          <img src={logo} onClick={e => { history.push('/') }} alt="React messenger" />
        </div>
        <div>
          <Searchbar />
          <button onClick={e => { history.push(HOME_ROUTE) }}> Home</button>
          <button onClick={e => { history.push(AUTH_ROUTE) }}> Sign In</button>
        </div>
      </header>
    </>
  );
};

export default Header;
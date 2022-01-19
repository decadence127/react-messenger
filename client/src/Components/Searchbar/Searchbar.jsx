import React from 'react';
import styles from './Searchbar.module.scss'
const Searchbar = () => {
  return (
    <>
      <input className={styles.searchBar} placeholder='Search...' />
    </>
  );
};

export default Searchbar;
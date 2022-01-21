import React from 'react';
import styles from './AlertBox.module.scss';


const AlertBox = (props) => {
  return (
    <div className={styles[props.alertType]}>
      {props.message}
    </div>
  );
};

export default AlertBox;
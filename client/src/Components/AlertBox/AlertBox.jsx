import React from 'react';
import styles from './AlertBox.module.scss';


const AlertBox = (props) => {
  return (
    <div className={styles[props.alertType]}>
      {props.message.map((msg) => (<p>{msg}</p>))}
    </div>
  );
};

export default AlertBox;
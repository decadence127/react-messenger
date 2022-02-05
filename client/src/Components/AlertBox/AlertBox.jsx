import React from 'react';
import styles from './AlertBox.module.scss';


const AlertBox = (props) => {
  return (
    <div className={styles[props.alertType]}>
      {props.message.map((msg, index) => (<p key={index}>{msg.param ? `${msg.param}: ${msg.msg}` : msg}</p>))}
    </div>
  );
};

export default AlertBox;
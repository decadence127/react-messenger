import React from 'react';
import styles from './PaperCard.module.scss';


const PaperCard = (props) => {
  return (
    <div className={styles[props.styleName]}>
      {props.children}
    </div>
  );
};

export default PaperCard;
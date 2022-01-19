import React from 'react';
import styles from './ImageContainer.module.scss'
const ImageContainer = (props) => {
  return (
    <div className={styles.imageContainer}>
      {props.children}
    </div>
  );
};

export default ImageContainer;
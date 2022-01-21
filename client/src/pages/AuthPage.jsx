import React from 'react';
import styles from './pageStyles/AuthPage.module.scss'
import PaperCard from '../Components/PaperCard/PaperCard';
import ImageContainer from '../Components/ImageContainer/ImageContainer';
import chattingBackground from '../assets/sign-background-chat.png'
import SignUpComponent from '../Components/SignUpComponent/SignUpComponent';
const AuthPage = () => {
  return (
    <article className={styles.authPageArticle}>
      <PaperCard styleName="signUpCard">
        <SignUpComponent />
      </PaperCard>
      <ImageContainer>
        <img src={chattingBackground} alt='mobile' />
      </ImageContainer>
    </article>
  );
};

export default AuthPage;
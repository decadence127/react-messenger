import React from 'react';
import ImageContainer from '../Components/ImageContainer/ImageContainer';
import PaperCard from '../Components/PaperCard/PaperCard';
import mobilePhone from '../assets/clip-chatting.png'
import chaticon from '../assets/chaticon.png'
import SignInComponent from '../Components/SignInComponent/SignInComponent';
import styles from './pageStyles/HomePage.module.scss'

const HomePage = () => {

  return (
    <article className={styles.homePageArticle}>
      <PaperCard styleName="signInCard">
        <SignInComponent />
      </PaperCard>
      <ImageContainer>
        <img src={mobilePhone} alt='mobile' />
      </ImageContainer>
    </article>
  );
};

export default HomePage;
import React from 'react';
import ImageContainer from '../Components/ImageContainer/ImageContainer';
import PaperCard from '../Components/PaperCard/PaperCard';
import mobilePhone from '../assets/clip-chatting.png'
import chaticon from '../assets/chaticon.png'
import SignUpComponent from '../Components/SignUpComponent/SignUpComponent';


const HomePage = () => {

  return (
    <article style={{ display: 'flex', justifyContent: 'space-between' }}>
      <PaperCard styleName="signUpCard">
        <SignUpComponent />
      </PaperCard>
      <ImageContainer>
        <img src={mobilePhone} alt='mobile' />
      </ImageContainer>
    </article>
  );
};

export default HomePage;
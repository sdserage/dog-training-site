import React from 'react';
import './Home.css';
/* Images */
import whiteLogo from '../../assets/images/nlolWhite.svg';
import blackLogo from '../../assets/images/nlolBlack.png';
import otherLogo from '../../assets/images/nlolCustom.svg';
import pensiveDog from '../../assets/images/pensiveDog.JPG';
import dogWithBall from '../../assets/images/dogWithBall.JPG';
import playfulDog from '../../assets/images/playfulDog.JPG';
import runningPuppies from '../../assets/images/runningPuppies.jpg';
/* Components */
import {Parallax, Background} from 'react-parallax';

function Home() {
  return (
    <section id='home'>
      <img
        src={blackLogo}
        alt='New Lead on Life Dog Training'
        className='logo-desktop'
      />

      <div style={{height: '400vh'}}></div>
    </section>
  );
}

export default Home;


// <Background className="custom-bg">
//   <img src="../../assets/images/playfulDog.JPG" alt="playful dog" />
// </Background>

import React from 'react';
import './Home.css';
/* Images */
import whiteLogo from '../../assets/images/nlolWhite.svg';
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
      <Parallax
        blur={0}
        bgImage={runningPuppies}
        bgImageAlt="dog"
        bgClassName="home-parallax-img"
        strength={200}
      >
        <div
          className='home-parallax'
        >
          <img
            className='home-logo'
            src={whiteLogo}
            alt='New Lead on Life Dog Training'
          />
        </div>
      </Parallax>
      <Parallax
        blur={{ min: 15, max: -15 }}
        bgImage={dogWithBall}
        bgImageAlt="the dog with ball"
        strength={200}
      >
        Blur transition from min to max
        <div style={{ height: '1000px', width: '100vw' }} />
      </Parallax>
    <Parallax strength={300} bgImage={playfulDog}>
      <div style={{ height: '400px' }}>Use the background component for custom elements</div>

    </Parallax>
    </section>
  );
}

export default Home;


// <Background className="custom-bg">
//   <img src="../../assets/images/playfulDog.JPG" alt="playful dog" />
// </Background>

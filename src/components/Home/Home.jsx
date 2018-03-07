import React from 'react';
/* Images */
import pensiveDog from '../../assets/images/pensiveDog.JPG';
import dogWithBall from '../../assets/images/dogWithBall.JPG';
import playfulDog from '../../assets/images/playfulDog.JPG';
/* Components */
import {Parallax, Background} from 'react-parallax';

function Home() {
  return (
    <section>
      <Parallax
        blur={0}
        bgImage={pensiveDog}
        bgImageAlt="dog"
        strength={200}
      >
      Home Content
        <div style={{ height: '400px' }} />
      </Parallax>
      <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={dogWithBall}
      bgImageAlt="the dog with ball"
      strength={200}
    >
      Blur transition from min to max
      <div style={{ height: '400px' }} />
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

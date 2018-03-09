import React from 'react';
import './Home.css';
/* Images */
import blackLogo from '../../assets/images/nlolBlack.png';

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

import React from 'react';
import './Home.css';
/* Images */
import blackLogo from '../../assets/images/nlolBlack.png';
/* Components */
import Paragraph from '../../assets/functionalComponents/Paragraph/Paragraph';

const hardCoded1stParagraph = "Our training philosophy is that learning should be fun for both the dog and their owner while still being educational and relationship-building. Effective communication is essential to a healthy and loving human-canine relationship."

const hardCoded2ndParagraph = "At New Lead on Life, we use positive reinforcement techniques that are science-based, fun, and flexible. Not all dogs learn in the same way and any good training plan needs to be able to adapt to the needs of each individual dog."

const hardCodedServicesLink = "Check out our |services page| to see how we can help you and your dog today! Serving the Bakersfield, CA area.";
const hardCodedServicesLinkArr = [
  {
    url: '/services',
    isOutside: false
  }
];

const hardCodedFinalParagraph = "Find us on Facebook at |fb.me/nloldogtraining| or follow us on Instagram at |@newleadonlifedogtraining";
const hardCodedFinalParagraphLinks = [
  {
    url: 'https://urlgeni.us/facebook/jR2M',
    isOutside: true
  },
  {
    url: 'https://urlgeni.us/instagram/o5rY',
    isOutside: true
  }
]

function Home() {
  return (
    <section id='home'>
      <img
        src={blackLogo}
        alt='New Lead on Life Dog Training'
        className='logo-desktop'
      />

      <h2 className='main-header'>
        Welcome to New Lead On Life Dog Training!
      </h2>

      <Paragraph
        textBlock={hardCoded1stParagraph}
        className='home-paragraph primary-paragraph home-1st'
      />

      <Paragraph
        textBlock={hardCoded2ndParagraph}
        className='home-paragraph'
      />

      <Paragraph
        textBlock={hardCodedServicesLink}
        parseChar='|'
        linksArr={hardCodedServicesLinkArr}
        className='home-paragraph'
      />

      <Paragraph
        textBlock={hardCodedFinalParagraph}
        linksArr={hardCodedFinalParagraphLinks}
        className='home-paragraph'
      />

    </section>
  );
}

export default Home;

import React from 'react';
import './Footer.css';
import ADPT from '../../assets/images/APDT.png';
import CATCH from '../../assets/images/CATCH.png';
/* Components */
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer">
      <section
        alt='Professional Certification Links'
        className='certification-websites'
      >

        <a href="https://www.apdt.com" target='_blank'>
          <img
            className="adpt-logo"
            alt="Association of Professional Dog Trainers"
            src={ADPT}
          />
        </a>

        <a href="https://www.catchdogtrainers.com" target='_blank'>
          <img
            className="catch-logo"
            alt="Certified Dog Trainer Catch CTA"
            src={CATCH}
          />
        </a>

      </section>
    </footer>
  );
}

export default Footer;

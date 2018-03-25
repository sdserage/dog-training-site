import React from 'react';
import './Services.css';
/* Images */

/* Components */
import Paragraph from '../../assets/functionalComponents/Paragraph/Paragraph';

const hardCodedPrivateTrainingP = "Enjoy custom training plans from the comfort of your own home. By having private sessions, you are ensuring that all training is tailored to fit you and your dog's needs! Contact us today to set up your initial consultation today!";

function Services() {
  return (
    <section id='services'>
      <h1 className='main-header'>
        Our Services
      </h1>

      <h2 className='secondary-header primary-paragraph'>
        Private Training
      </h2>
      <Paragraph
        textBlock={hardCodedPrivateTrainingP}
        className="services-paragraph"
      />

      <h2 className='secondary-header'>
        Group Training Classes
      </h2>
      <Paragraph
        textBlock="Coming soon! Stay tuned!"
        className="services-paragraph"
      />

      <h2 className='secondary-header'>
        Day Training
      </h2>
      <Paragraph
        textBlock="Coming soon! Stay tuned!"
        className="services-paragraph"
      />

    </section>
  );
}

export default Services;

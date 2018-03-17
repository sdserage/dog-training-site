import React /*, {Component}*/ from 'react';
import './Troubleshooting.css';
/* Images */

/* Components */
import DisplayQuestions from './functionalComponents//DisplayQuestions';

function Troubleshooting() {
  return (
    <section id='troubleshooting'>
      <h1 className='main-header'>
        Training Troubleshooting
      </h1>
      <h3 className='secondary-header'>
        Are you having trouble with your dog? Check out some of our frequently asked questions below for tips on improving communication with your dog!
      </h3>
      <DisplayQuestions/>
    </section>
  );
}

export default Troubleshooting;

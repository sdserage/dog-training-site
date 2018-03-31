import React, { Component } from 'react';
import axios from 'axios';
import './Troubleshooting.css';
/* Images */

/* Components */
import DisplayQuestions from './functionalComponents/DisplayQuestions/DisplayQuestions';

class Troubleshooting extends Component {

  constructor(props){
    super(props);
    this.state = {
      faqs: [
        {
          question: 'Loading...',
          answer: 'Loading...'
        }
      ]
    }
  }

  componentWillMount(){
    axios.get('/api/faqs').then(res=>{
      this.setState({
        faqs: res.data
      })
    });
  }

  render(){
    const { faqs } = this.state;
    return (
      <section id='troubleshooting'>
        <h1 className='main-header'>
          Training Troubleshooting
        </h1>
        <h3 className='secondary-header'>
          Are you having trouble with your dog? Check out some of our frequently asked questions below for tips on improving communication with your dog!
        </h3>
        <DisplayQuestions faqs={faqs}/>
      </section>
    );
  }
}

export default Troubleshooting;

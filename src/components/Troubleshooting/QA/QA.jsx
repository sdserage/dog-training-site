import React, {Component} from 'react';
import {theme1} from '../../../assets/constants/themes';
/* Images */

/* Components */
import Paragraph from '../../../assets/functionalComponents/Paragraph/Paragraph';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

/* Constants */
const {lighterColor} = theme1

export default class QA extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayAnswer: false
    };
    this.toggleAnswer = this.toggleAnswer.bind(this);
  }

  toggleAnswer(){
    this.setState({
      displayAnswer: !this.state.displayAnswer
    });
  }

  render(){
    const {q, a, links} = this.props;
    const {displayAnswer} = this.state
    const beforeText = <span className='qa-a'>A: </span>
    return (
      <div className='qa'>
      <FloatingActionButton
        mini={true}
        className='qa-button'
        backgroundColor={lighterColor}
        iconStyle={{fill: 'black'}}
        onClick={this.toggleAnswer}
      >
        <Arrow
          color='black'
          className={
            `qa-arrow ${displayAnswer ? 'arrow-down' : ''}`
          }
        />
      </FloatingActionButton>
        <h2 className='qa-question'>Q: {q}</h2>
        {
          displayAnswer &&
            <Paragraph
              textBlock={a}
              before={beforeText}
              parseChar={'|'}
              linksArr={links}
              className='qa-answer'
            />
        }
      </div>
    );
  };
}

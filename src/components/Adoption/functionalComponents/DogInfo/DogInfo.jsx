import React from 'react';

/* Components */
import Paragraph from '../../../../assets/functionalComponents/Paragraph/Paragraph';

export default function DogInfo(props) {
  const {image, name, description, summary, summaryLinks, index} = props;
  return (
    <li className={`dog-info ${index === 0 ? 'dog-info-1st' : ''}`}>
      <h3>{name}</h3>
      <img src={image} alt={name}/>
      <Paragraph className='description' textBlock={description}/>
      <Paragraph className='summary' textBlock={summary} linksArr={summaryLinks}/>
    </li>
  );
}

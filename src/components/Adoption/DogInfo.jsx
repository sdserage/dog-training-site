import React from 'react';

export default function DogInfo(props) {
  const {image, name, description, summary, linkInfo, index} = props;
  return (
    <li className={`dog-info ${index === 0 ? 'dog-info-1st' : ''}`}>
      <h3>{name}</h3>
      <img src={image} alt={name}/>
      <p>{description}</p>
      <h5>{summary}</h5>
    </li>
  );
}

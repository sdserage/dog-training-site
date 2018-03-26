import React from 'react';
import ReactDOM from 'react-dom';
import DogInfoDisplay from './DogInfoDisplay';

describe('DogInfoDisplay component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DogInfoDisplay />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

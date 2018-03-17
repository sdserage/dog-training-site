import React from 'react';
import ReactDOM from 'react-dom';
import Paragraph from './Paragraph';

describe('Paragraph component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paragraph />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

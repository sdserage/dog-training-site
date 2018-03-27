import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';

describe('Store component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Store />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

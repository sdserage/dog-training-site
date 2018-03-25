import React from 'react';
import ReactDOM from 'react-dom';
import DesktopNav from './DesktopNav';
import {BrowserRouter as Router} from 'react-router-dom';

describe('DesktopNav component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <DesktopNav />
      </Router>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

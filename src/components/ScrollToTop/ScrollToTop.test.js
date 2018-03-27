import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './ScrollToTop';
import {BrowserRouter as Router} from 'react-router-dom';

describe('ScrollToTop component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <ScrollToTop>
          <div>{/* This Component requires a child to render */}</div>
        </ScrollToTop>
      </Router>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

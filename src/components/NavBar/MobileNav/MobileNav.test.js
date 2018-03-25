import React from 'react';
import ReactDOM from 'react-dom';
import MobileNav from './MobileNav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router} from 'react-router-dom';

describe('MobileNav component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <Router>
          <MobileNav/>
        </Router>
      </MuiThemeProvider>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

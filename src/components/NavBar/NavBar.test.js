import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router} from 'react-router-dom';

describe('NavBar component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <Router>
          <NavBar/>
        </Router>
      </MuiThemeProvider>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

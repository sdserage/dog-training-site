import React from 'react';
import ReactDOM from 'react-dom';
import Adoption from './Adoption';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Adoption component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <Router>
          <Adoption/>
        </Router>
      </MuiThemeProvider>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

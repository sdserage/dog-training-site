import React from 'react';
import ReactDOM from 'react-dom';
import DogInfo from './DogInfo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router} from 'react-router-dom';

describe('DogInfo component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <Router>
          <DogInfo/>
        </Router>
      </MuiThemeProvider>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

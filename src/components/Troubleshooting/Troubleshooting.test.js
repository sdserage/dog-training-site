import React from 'react';
import ReactDOM from 'react-dom';
import Troubleshooting from './Troubleshooting';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('Troubleshooting component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <Troubleshooting/>
      </MuiThemeProvider>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import ContactLink from './ContactLink';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('ContactLink component:', () => {
  it('Renders without crashing (Requires MuiThemeProvider because it uses Material UI components)', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <ContactLink/>
      </MuiThemeProvider>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

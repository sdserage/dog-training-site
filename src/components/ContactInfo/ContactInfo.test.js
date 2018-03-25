import React from 'react';
import ReactDOM from 'react-dom';
import ContactInfo from './ContactInfo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('ContactInfo component:', () => {
  it('Renders without crashing (Requires MuiThemeProvider because it uses Material UI components)', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <ContactInfo/>
      </MuiThemeProvider>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

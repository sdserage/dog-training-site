import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('Main component:', () => {
  it('Renders without crashing (Requires MuiThemeProvider because it uses Material UI components)', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

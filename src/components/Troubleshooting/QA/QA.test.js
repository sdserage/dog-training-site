import React from 'react';
import ReactDOM from 'react-dom';
import QA from './QA';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('QA component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <QA/>
      </MuiThemeProvider>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

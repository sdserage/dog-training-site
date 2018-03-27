import React from 'react';
import ReactDOM from 'react-dom';
import DisplayQuestions from './DisplayQuestions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('DisplayQuestions component:', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <DisplayQuestions />
      </MuiThemeProvider>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

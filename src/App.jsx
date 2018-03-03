import React from 'react';
import themes from './assets/constants/themes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
/* Components */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main/Main';

export default function App(){
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(themes.theme1, themes.zIndex)}>
      <Main/>
    </MuiThemeProvider>
  );
};

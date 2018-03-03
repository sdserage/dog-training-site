import React from 'react';
/* Components */
import router from '../../router';
import NavBar from '../NavBar/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';

function Main() {
  return (
    <Router>
      <div>
        <NavBar/>
        {router}
      </div>
    </Router>
  );
}

export default Main;

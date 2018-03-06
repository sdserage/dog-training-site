import React from 'react';
import './Main.css';
/* Components */
import router from '../../router';
import NavBar from '../NavBar/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';

function Main() {
  return (
    <Router>
      <div className="main-wrapper">
        <NavBar/>
        {router}
      </div>
    </Router>
  );
}

export default Main;

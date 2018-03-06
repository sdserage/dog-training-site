import React, {Component} from 'react';
import '../NavBar.css';
/* Components */
import {Link} from 'react-router-dom';

class DesktopNav extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  };

  render(){
    return (
      <nav className="desktop-navbar">
        <Link to='/'>
          <h2>Home</h2>
        </Link>

        <Link to='/about'>
          <h2>About Us</h2>
        </Link>

        <Link to='/services'>
          <h2>Our Services</h2>
        </Link>

        <Link to='/adoption'>
          <h2>Training to Adoption</h2>
        </Link>

        <Link to='/troubleshooting'>
          <h2>Training Troubleshooting</h2>
        </Link>

        <Link to='/store'>
          <h2>Online Store</h2>
        </Link>
      </nav>
    );
  };
}

export default DesktopNav;

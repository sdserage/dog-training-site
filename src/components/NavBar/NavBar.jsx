import React, {Component} from 'react';
import './NavBar.css';
/* Components */
import {Link} from 'react-router-dom';
import MobileNav from './MobileNav/MobileNav';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  };

  render(){
    return (
      <div>
        <MobileNav/>
        <nav className="tablet-navbar">

        </nav>
        <nav className="desktop-navbar">
        </nav>
      </div>
    );
  };
}

export default NavBar;

// <nav>
//   <Link to=''>
//     Home
//   </Link>
//
//   <Link to=''>
//     About Us
//   </Link>
//
//   <Link to=''>
//     Training to Adoption
//   </Link>
//
//   <Link to=''>
//     Training Troubleshooting
//   </Link>
//
//   <Link to=''>
//     Online Store
//   </Link>
// </nav>

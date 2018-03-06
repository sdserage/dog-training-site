import React, {Component} from 'react';
import './NavBar.css';
/* Components */
import MobileNav from './MobileNav/MobileNav';
import DesktopNav from './DesktopNav/DesktopNav';

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
        <DesktopNav/>
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

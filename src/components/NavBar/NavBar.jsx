import React from 'react';
import './NavBar.css';
/* Components */
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

function NavBar() {
  return (
    <AppBar
      title="Home"
      showMenuIconButton={false}
      iconElementRight={<IconButton><Menu/></IconButton>}
    />

  );
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

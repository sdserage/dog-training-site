import React from 'react';
import './NavBar.css';
/* Components */
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

function NavBar() {
  return (
    <nav>
      <div className="mobile-navbar">
        <AppBar

          style={{position: 'fixed',
          top: '0'}}
          title="Home"
          showMenuIconButton={false}
          iconElementRight={<IconButton><Menu/></IconButton>}
        />
      </div>
      <aside className="tablet-navbar">
        
      </aside>
      <div className="desktop-navbar">
      </div>
    </nav>
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

import React from 'react';
import './NavBar.css';
/* Components */
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to=''>
        Home
      </Link>

      <Link to=''>
        About Us
      </Link>

      <Link to=''>
        Training to Adoption
      </Link>
      
      <Link to=''>
        Training Troubleshooting
      </Link>

      <Link to=''>
        Online Store
      </Link>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import { theme1 } from '../../../../assets/constants/themes';
/* Components */
import { Link } from 'react-router-dom';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';

export default function NavMenu(props){
  const {open, anchorEl, handleRequestClose} = props;
  return (
    <Popover
      className="mobile-navbar-popover"
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      onRequestClose={handleRequestClose}
    >
      <Menu>
        <Link to='/' onClick={handleRequestClose}>
          <MenuItem primaryText='Home'/>
        </Link>

        <Link to='/about' onClick={handleRequestClose}>
          <MenuItem primaryText='About Us'/>
        </Link>

        <Link to='/services' onClick={handleRequestClose}>
          <MenuItem primaryText='Our Services'/>
        </Link>

        <Link to='/adoption' onClick={handleRequestClose}>
          <MenuItem primaryText='Training to Adoption'/>
        </Link>

        <Link to='/troubleshooting' onClick={handleRequestClose}>
          <MenuItem primaryText='Training Troubleshooting'/>
        </Link>

        <Link to='/store' onClick={handleRequestClose}>
          <MenuItem primaryText='Online Store'/>
        </Link>
      </Menu>
      <Menu>
        <a href={process.env.REACT_APP_LOGIN}>
          <MenuItem style={{color: theme1.mediumColor}} primaryText='Login'/>
        </a>
      </Menu>
    </Popover>
  );
}

import React, {Component} from 'react';
/* Components */
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';

export default class MobileNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  };

  handleClick = (event)=> {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render(){
    const {handleClick, handleRequestClose} = this;
    const {open, anchorEl} = this.state;
    return (
      <nav className="mobile-navbar">
        <AppBar
          style={{
            position: 'fixed',
            top: '0'
          }}
          title="Logo"
          showMenuIconButton={false}
          iconElementRight={
            <IconButton onClick={handleClick}>
              <MenuIcon/>
            </IconButton>
        }/>
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText='Home'/>
            <MenuItem primaryText='About Us'/>
            <MenuItem primaryText='Our Services'/>
            <MenuItem primaryText='Training to Adoption'/>
            <MenuItem primaryText='Training Troubleshooting'/>
            <MenuItem primaryText='Online Store'/>
          </Menu>
        </Popover>
      </nav>
    );
  };
}

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

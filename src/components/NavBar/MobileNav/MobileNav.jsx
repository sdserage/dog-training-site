import React, {Component} from 'react';
import '../NavBar.css';
/* Components */
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import LogoIconSVG from './LogoIconSVG';

export default class MobileNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      iconStyles: {
        width: '200px',
        height: '50px'
      }
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
    const {open, anchorEl, iconStyles} = this.state;
    return (
      <nav className="mobile-navbar">
        <AppBar
          style={{
            position: 'fixed',
            top: '0',
            overflow: 'hidden'
          }}
          showMenuIconButton={true}

          iconElementLeft={
            <Link to='/' onClick={handleRequestClose}>
              <LogoIconSVG/>
            </Link>
          }
          iconElementRight={
            <IconButton onClick={handleClick}>
              <MenuIcon/>
            </IconButton>
        }/>
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
        </Popover>
      </nav>
    );
  };
}

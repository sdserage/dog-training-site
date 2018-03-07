import React, {Component} from 'react';
import '../NavBar.css';
/* Components */
import {Link} from 'react-router-dom';
import LogoIconSVG from './functionalComponents/LogoIconSVG';
import NavMenu from './functionalComponents/NavMenu';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

export default class MobileNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
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
        <NavMenu
          open={open}
          anchorEl={anchorEl}
          handleRequestClose={handleRequestClose}
        />
      </nav>
    );
  };
}

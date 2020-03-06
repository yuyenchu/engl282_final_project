import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link,useHistory } from "react-router-dom";
import logo from '../logo.svg';

function Main() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  return (
    <div className="App">
      <div>
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/english">
          English
        </Button>
        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
          Study Cases
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={() => {
            history.push({
              pathname: '/study',
              state: { id: 0 }
            })
          }}>Case1</MenuItem>
          <MenuItem onClick={() => {
            history.push({
              pathname: '/study',
              state: { id: 1 }
            })
          }}>Case2</MenuItem>
          <MenuItem onClick={() => {
            history.push({
              pathname: '/study',
              state: { id: 2 }
            })
          }}>Case3</MenuItem>
        </Menu>
        
      </div>
      <header className="App-header">
        <h1>
          Welcome to ENGL 282 cyber sercurity group website!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Button component={Link} to="/study/">Click here to go to study</Button>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default Main;
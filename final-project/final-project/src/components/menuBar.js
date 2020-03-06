import React from 'react';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";

function MenuBar(func){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
        <MenuItem onClick={() => {func(0);handleClose()}}>Case1</MenuItem>
        <MenuItem onClick={() => {func(1);handleClose()}}>Case2</MenuItem>
        <MenuItem onClick={() => {func(2);handleClose()}}>Case3</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuBar;
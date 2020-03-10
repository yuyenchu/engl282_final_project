import React from 'react';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import img from "../placeholder.jpg"

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 36,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: '5px 3px 5px',
  },
});

function MenuBar(func){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonStyle = useStyles();

  return (
    <div align="left">
      <Grid container alignItems="center" >
        <img src={img} alt="Logo" height="45px" style={{margin:"5px 5px 5px"}}/>
        <Button classes={{root: buttonStyle.root}} component={Link} to="/">
          Home
        </Button>
        <Button classes={{root: buttonStyle.root}} component={Link} to="/poets">
          Poets
        </Button>
        <Button classes={{root: buttonStyle.root}} href="javascript:;" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
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
        <Button classes={{root: buttonStyle.root}} component={Link} to="/photo">
          Photo Gallery
        </Button>
        <Button classes={{root: buttonStyle.root}} component={Link} to="/citation">
          Citation
        </Button>
      </Grid>
    </div>
  );
}

export default MenuBar;
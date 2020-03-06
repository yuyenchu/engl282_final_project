import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Link,useHistory } from "react-router-dom";


function Studycase(props) {
  
  const [value, setValue] = useState(props.location.state.id)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const history = useHistory();

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
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
          <MenuItem onClick={() => {setValue(0);handleClose()}}>Case1</MenuItem>
          <MenuItem onClick={() => {setValue(1);handleClose()}}>Case2</MenuItem>
          <MenuItem onClick={() => {setValue(2);handleClose()}}>Case3</MenuItem>
        </Menu>
        
      </div>
      <header id='header1'>
        <h1>
          Cyber Sercurity Studies
        </h1>
        <AppBar position="static" classname="related-bar">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
        <Grid>
          <Button component={Link} to="/">Click here to go to main</Button>
          <Button component={Link} to="/english">Click here to go to english</Button>
        </Grid>        
      </header>
    </div>
  );
}
export default Studycase;
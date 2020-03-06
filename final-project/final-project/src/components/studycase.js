import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MenuBar from"./menuBar";


function Studycase(props) {
  const [value, setValue] = useState(props.location.state.id)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

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
      {MenuBar(setValue)}
      <header id='header1'>
        <h1>
          Cyber Sercurity Studies
        </h1>
        <AppBar position="static" classname="related-bar">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Case 1" {...a11yProps(0)} />
            <Tab label="Case 2" {...a11yProps(1)} />
            <Tab label="Case 3" {...a11yProps(2)} />
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
      </header>
    </div>
  );
}
export default Studycase;
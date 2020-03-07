import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MenuBar from"./menuBar";
import img from "../placeholder.jpg"


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
      <div>
        <header>
          <h1>
            Cyber Sercurity Studies
          </h1>
        </header>
        <AppBar position="static" classname="related-bar">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Case 1" {...a11yProps(0)} />
            <Tab label="Case 2" {...a11yProps(1)} />
            <Tab label="Case 3" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <header>
            Item One
          </header>
          <div class="container">
          <h2>
            Computers Will Destroy Us All (copied)
          </h2>
          <h4>
            Written by Article Author. Published MM/DD/YYYY.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent eget risus vitae massa semper aliquam quis mattis quam.
             Morbi vitae tortor tempus, placerat leo et, suscipit lectus. 
             Phasellus ut euismod massa, eu eleifend ipsum. Nulla eu neque 
             commodo, dapibus dolor eget, dictum arcu. In nec purus eu tellus 
             consequat ultricies. Donec feugiat tempor turpis, rutrum sagittis 
             mi venenatis at. Sed molestie lorem a blandit congue. Ut pellentesque 
             odio quis leo volutpat, vitae vulputate felis condimentum. Praesent
              vulputate fermentum lorem, id rhoncus sem vehicula eu. Quisque 
              ullamcorper, orci adipiscing auctor viverra, velit arcu malesuada 
              metus, in volutpat tellus sem at justo.
          </p>
          <div class="mid-article"style={{margin:"5px 5px 200px"}}>
            <img src={img} alt="img"/>
            <p class="image-caption">
              Caption for this image.
            </p>
          </div>
          <p>
            Fusce non fermentum mi. Praesent vel lobortis elit. Nulla sodales, 
            risus quis sollicitudin iaculis, felis dolor aliquet purus, eget 
            elementum velit nunc eu dolor. Curabitur elit tellus, dictum non 
            sem sit amet, viverra lobortis velit. Quisque facilisis, neque cursus
            ullamcorper ornare, dolor metus aliquam lacus, pharetra porttitor
            massa neque ut ligula. Vivamus laoreet nulla diam, eget adipiscing
            felis scelerisque sit amet. Mauris egestas, nisi vitae cursus 
            tincidunt, urna ipsum facilisis eros, ut venenatis dui tellus sit
            amet orci. Nullam a rhoncus diam, eget tristique felis. Nulla egestas 
            adipiscing fermentum. Aenean sagittis libero at eros ornare molestie. 
            Morbi convallis ornare imperdiet. Mauris convallis tristique erat ac 
            eleifend.
          </p>
          <p>
            Nunc ullamcorper neque nunc, vitae sollicitudin nunc placerat nec. 
            Suspendisse vel enim ultrices, fringilla urna luctus, lacinia est. 
            Quisque mattis dictum sapien vitae laoreet. Suspendisse ultricies, 
            <a href="https://www.google.com">lorem</a> id tempor elementum, 
            turpis magna pharetra purus, ac pulvinar metus ante quis nisi. 
            Praesent dui massa, egestas dictum mi ut, tempus consequat neque. 
            Maecenas urna tellus, fermentum at velit ac, commodo ultricies orci. 
            Morbi augue dui, tincidunt et purus quis, consequat dictum enim.
          </p>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <header>
            Item Two
          </header>
          <div class="container">
          <h2>
            Us Will Destroy Computers All
          </h2>
          <h4>
            Written by Article Author. Published MM/DD/YYYY.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent eget risus vitae massa semper aliquam quis mattis quam.
             Morbi vitae tortor tempus, placerat leo et, suscipit lectus. 
             Phasellus ut euismod massa, eu eleifend ipsum. Nulla eu neque 
             commodo, dapibus dolor eget, dictum arcu. In nec purus eu tellus 
             consequat ultricies. Donec feugiat tempor turpis, rutrum sagittis 
             mi venenatis at. Sed molestie lorem a blandit congue. Ut pellentesque 
             odio quis leo volutpat, vitae vulputate felis condimentum. Praesent
              vulputate fermentum lorem, id rhoncus sem vehicula eu. Quisque 
              ullamcorper, orci adipiscing auctor viverra, velit arcu malesuada 
              metus, in volutpat tellus sem at justo.
          </p>
          <div class="mid-article"style={{margin:"5px 5px 200px"}}>
            <img src={img} alt="img"/>
            <p class="image-caption">
              Caption for this image.
            </p>
          </div>
          <p>
            Fusce non fermentum mi. Praesent vel lobortis elit. Nulla sodales, 
            risus quis sollicitudin iaculis, felis dolor aliquet purus, eget 
            elementum velit nunc eu dolor. Curabitur elit tellus, dictum non 
            sem sit amet, viverra lobortis velit. Quisque facilisis, neque cursus
            ullamcorper ornare, dolor metus aliquam lacus, pharetra porttitor
            massa neque ut ligula. Vivamus laoreet nulla diam, eget adipiscing
            felis scelerisque sit amet. Mauris egestas, nisi vitae cursus 
            tincidunt, urna ipsum facilisis eros, ut venenatis dui tellus sit
            amet orci. Nullam a rhoncus diam, eget tristique felis. Nulla egestas 
            adipiscing fermentum. Aenean sagittis libero at eros ornare molestie. 
            Morbi convallis ornare imperdiet. Mauris convallis tristique erat ac 
            eleifend.
          </p>
          <p>
            Nunc ullamcorper neque nunc, vitae sollicitudin nunc placerat nec. 
            Suspendisse vel enim ultrices, fringilla urna luctus, lacinia est. 
            Quisque mattis dictum sapien vitae laoreet. Suspendisse ultricies, 
            <a href="https://www.google.com">lorem</a> id tempor elementum, 
            turpis magna pharetra purus, ac pulvinar metus ante quis nisi. 
            Praesent dui massa, egestas dictum mi ut, tempus consequat neque. 
            Maecenas urna tellus, fermentum at velit ac, commodo ultricies orci. 
            Morbi augue dui, tincidunt et purus quis, consequat dictum enim.
          </p>
        </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <header>
            Item Three
          </header>
          <div class="container">
          <h2>
            Destroy Will Compute Us All
          </h2>
          <h4>
            Written by Article Author. Published MM/DD/YYYY.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent eget risus vitae massa semper aliquam quis mattis quam.
             Morbi vitae tortor tempus, placerat leo et, suscipit lectus. 
             Phasellus ut euismod massa, eu eleifend ipsum. Nulla eu neque 
             commodo, dapibus dolor eget, dictum arcu. In nec purus eu tellus 
             consequat ultricies. Donec feugiat tempor turpis, rutrum sagittis 
             mi venenatis at. Sed molestie lorem a blandit congue. Ut pellentesque 
             odio quis leo volutpat, vitae vulputate felis condimentum. Praesent
              vulputate fermentum lorem, id rhoncus sem vehicula eu. Quisque 
              ullamcorper, orci adipiscing auctor viverra, velit arcu malesuada 
              metus, in volutpat tellus sem at justo.
          </p>
          <div class="mid-article"style={{margin:"5px 5px 200px"}}>
            <img src={img} alt="img"/>
            <p class="image-caption">
              Caption for this image.
            </p>
          </div>
          <p>
            Fusce non fermentum mi. Praesent vel lobortis elit. Nulla sodales, 
            risus quis sollicitudin iaculis, felis dolor aliquet purus, eget 
            elementum velit nunc eu dolor. Curabitur elit tellus, dictum non 
            sem sit amet, viverra lobortis velit. Quisque facilisis, neque cursus
            ullamcorper ornare, dolor metus aliquam lacus, pharetra porttitor
            massa neque ut ligula. Vivamus laoreet nulla diam, eget adipiscing
            felis scelerisque sit amet. Mauris egestas, nisi vitae cursus 
            tincidunt, urna ipsum facilisis eros, ut venenatis dui tellus sit
            amet orci. Nullam a rhoncus diam, eget tristique felis. Nulla egestas 
            adipiscing fermentum. Aenean sagittis libero at eros ornare molestie. 
            Morbi convallis ornare imperdiet. Mauris convallis tristique erat ac 
            eleifend.
          </p>
          <p>
            Nunc ullamcorper neque nunc, vitae sollicitudin nunc placerat nec. 
            Suspendisse vel enim ultrices, fringilla urna luctus, lacinia est. 
            Quisque mattis dictum sapien vitae laoreet. Suspendisse ultricies, 
            <a href="https://www.google.com">lorem</a> id tempor elementum, 
            turpis magna pharetra purus, ac pulvinar metus ante quis nisi. 
            Praesent dui massa, egestas dictum mi ut, tempus consequat neque. 
            Maecenas urna tellus, fermentum at velit ac, commodo ultricies orci. 
            Morbi augue dui, tincidunt et purus quis, consequat dictum enim.
          </p>
        </div>
        </TabPanel>
      </div>
      <footer>
          <p>
            Published by Publisher Name. Copyright 20XX.
          </p>
      </footer>
    </div>
  );
}
export default Studycase;
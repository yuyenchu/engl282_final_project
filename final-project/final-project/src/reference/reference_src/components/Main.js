import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import "../css/mainpage.css"
function Main() {
  
  return (
    <div id="home">
        <div id="main-container">
        <div id="header">
        <div id="title-left">
                <h1>Feed Me</h1>
                <h2>Reduced Food Wasted</h2>
            </div>
            <div id="title-right">
                <img src="../Food-Waste.jpg" alt="food waste" />
            </div>
            

        </div>
        <div id="mission-statement">
            <h3>Our Mission Statement</h3>
            <p>
            Our mission is to make delicious meals free to all homeless shelters, while helping restaurants reduce food wastage.
            </p>
        </div>
        <div id="button-bar">
          <Button component={Link} to="/login/">Click here to go to login</Button>
        </div>
        </div>

    </div>






    // <div id="main-container">
    //   <div id="header">
    //     <div id="title-left">
    //       <h1>Feedmee</h1>
    //     </div>
    //     <div id="title-right">
    //       <img src="../Food-Waste.jpg" alt="food waste"/>
    //     </div>  
    //   </div>
      
    //   <div id="mission-statement"> 
    //     <h3>Problem Statement</h3>
    //     <p>Food waste is bad
    //     </p>
    //     <h3>Our Mission Statement</h3>
    //     <p>
    //       Feedmee aims to reduce food waste by create a centralize platform for business such as 
    //       restaurants to give away their waste food.
    //     </p>

    //   </div>
    //   <div id="button-bar"> 
    //     <Button component={Link} to="/login/">Click here to go to login</Button>
    //   </div>
    // </div>
  )
}

export default Main;
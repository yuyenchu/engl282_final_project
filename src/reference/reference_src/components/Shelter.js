import React from 'react'
import FoodMenu from './FoodMenu'
import Map from './Map'
import ShoppingCartButton from './ShoppingCartButton'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

import '../css/Shelter.css'

function Shelter() {
  
  return (
    <div id="main-column-container">
      {/* <header id="header1">
          <h2>Feed Me</h2>
      </header> */}
      <div id="main-container1">

        <div id="left-section">
          <FoodMenu/>
        </div>

        <div id="right-section">
          <Map/>
        </div>
      </div>

      <div id="bottom-section">
        <React.Fragment>
          <Button component={Link} variant='contained' 
                  style={{position:"absolute", left:"1%"}} 
                  to="/">Go to main</Button> 
        </React.Fragment>
        <ShoppingCartButton/>
      </div>
      
    </div>
  )
}

export default Shelter;
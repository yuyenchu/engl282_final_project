import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

function studycase() {
  return (
    <div id='holder1'>
      <header id='header1'>
        <h1>
          Welcome to ENGL 282 cyber sercurity group website!
        </h1>
        <Button component={Link} to="/">Click here to go to main</Button>
      </header>
    </div>
  );
}
export default studycase;
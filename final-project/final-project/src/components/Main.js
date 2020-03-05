import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import logo from '../logo.svg';

function Main() {
  return (
    <div className="App">
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
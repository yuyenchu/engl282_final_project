import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../logo.svg';
import MenuBar from"./menuBar";

function Main() {
  const history = useHistory();

  return (
    <div className="App">
      {MenuBar((id) => {
            history.push({
              pathname: '/study',
              state: { id: id }
      })})}
      <header className="App-header"> 
        <h1>
          Welcome to ENGL 282 cyber sercurity group website!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
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
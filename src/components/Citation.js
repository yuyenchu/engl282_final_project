import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../logo.svg';
import MenuBar from"./menuBar";

function Citation() {
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
          Welcome to Citation page
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <footer>
        <p>
          Published by Publisher Name. Copyright 20XX.
        </p>
      </footer>
    </div>
  );
}
export default Citation;
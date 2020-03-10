import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../logo.svg';
import MenuBar from"./menuBar";

function Photo() {
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
          Welcome to Photo page
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
export default Photo;
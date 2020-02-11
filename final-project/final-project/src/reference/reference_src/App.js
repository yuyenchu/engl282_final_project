import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

//routers
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Shelter from './components/Shelter'
import Restaurant from './components/Restaurant'
import Login from './components/Login'
import Main from './components/Main'
//store
import { Context, reducer, initialState } from './store'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
    
  return (
    <Context.Provider value={{ state, dispatch }}>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/shelter/" component={Shelter} />
        <Route exact path="/restaurant/" component={Restaurant} />
        <Route exact path="/login/" component={Login} />
      </Switch>
    </Router>
    </Context.Provider>
  );
}

export default App;

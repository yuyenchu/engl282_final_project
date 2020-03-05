import React from 'react';

//routers
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main'
import studycase from './components/studycase'
import './App.css';


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/study" component={studycase} />
      </Switch>
    </Router>
  );
  // 
}

export default App;

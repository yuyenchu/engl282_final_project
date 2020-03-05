import React from 'react';
//routers
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages
import Main from './components/Main'
import studycase from './components/studycase'
import english from './components/english'
//css
import "./css/App.css";
import "./css/english.css";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/study" component={studycase} />
        <Route exact path="/english" component={english} />
      </Switch>
    </Router>
  );
}

export default App;

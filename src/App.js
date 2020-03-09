import React from 'react';
//routers
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages
import Main from './components/Main'
import Studycase from './components/Studycase'
import English from './components/English'
import ImageInput from './components/ImageInput'
//css
import "./css/App.css";
import "./css/english.css";


function App() {
  return (
    <Router>
      <Switch>
        {/* create url for pages */}
        <Route exact path="/" component={Main} />
        <Route exact path="/study" component={Studycase} />
        <Route exact path="/english" component={English} />
        <Route exact path="/photo" component={ImageInput} />
      </Switch>
    </Router>
  );
}

export default App;

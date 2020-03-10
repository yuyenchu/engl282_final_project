import React from 'react';
//routers
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages
import Main from './components/Main'
import Studycase from './components/Studycase'
import English from './components/English'
import ImageInput from './components/ImageInput'
import Photo from './components/Photo'
import Poet from './components/Poet'
import Citation from './components/Citation'
//css
import "./css/App.css";
import "./css/english.css";


function App() {
  return (
    <Router>
      <Switch>
        {/* create url for pages */}
        <Route exact path="/" component={English} />
        <Route exact path="/study" component={Studycase} />
        <Route exact path="/photo" component={Photo} />
        <Route exact path="/poets" component={Poet} />
        <Route exact path="/citation" component={Citation} />
      </Switch>
    </Router>
  );
}

export default App;

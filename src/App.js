import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Header from './containers/Header/Header';

import './App.css';
import {
  Home,
  Education,
  Career,
  Skills,
  Contact
} from './containers';

class App extends Component {
  state = {
    isNavOpen: false
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/career" component={Career} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  )
}
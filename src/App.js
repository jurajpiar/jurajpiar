import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Header from './containers/Header/Header';

import './App.css';
import Home from './containers/Home/Home';
import Education from './containers/Education/Education';
import Career from './containers/Education/Education';

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
        <Route path="/about" component={Education} />
        <Route path="/topics" component={Career} />
      </Switch>
    </main>
  )
}
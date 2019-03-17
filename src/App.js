import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Header from './containers/Header/Header';

import './App.css';
import Home from './containers/Home/Home';
import Education from './containers/Education/Education';
import Career from './containers/Career/Career';

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
      </Switch>
    </main>
  )
}
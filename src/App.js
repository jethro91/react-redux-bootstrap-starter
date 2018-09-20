import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';

import Home from 'pages/Home';
import About from 'pages/About';
import Profile from 'pages/Profile';

import Login from 'pages/Login';
import NotFound404 from 'pages/NotFound404';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route component={NotFound404} />
      </Switch>
    );
  }
}
export default App;

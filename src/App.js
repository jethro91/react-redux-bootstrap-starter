import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import {Home, About, Profile, Login, NotFound404} from 'pages';

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

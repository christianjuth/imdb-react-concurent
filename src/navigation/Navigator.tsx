import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen, MovieScreen } from '../screens';
import Navbar from './Navbar';

function Navigator() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/:id">
          <MovieScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigator;
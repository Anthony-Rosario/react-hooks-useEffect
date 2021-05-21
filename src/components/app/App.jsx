/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListContainer from '../../containers/ListContainer';
import ListDetailContainer from '../../containers/ListDetailContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route 
          exact path="/"
          component={ListContainer}
        />
        <Route 
          path="/:id"
          component={ListDetailContainer}
        />
      </Switch>
    </Router>
  );
}

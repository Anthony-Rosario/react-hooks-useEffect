/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route 
          exact="/"
          component={}
        />
        <Route 
          exact="/:id"
          component={}
        />
      </Switch>
    </Router>
  )
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Router;

import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Dashboard from "./components/Dashboard"
import Settings from "./components/Settings"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
};

export default Routes

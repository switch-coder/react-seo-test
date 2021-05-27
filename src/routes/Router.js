import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import EventList from "./EventList";
import EventDetail from "./EventDetail";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={EventList} />
        <Route  exact={true} path="/detail/:id" component={EventDetail} />
        {/* Not Found */}
        <Redirect to=""></Redirect>
      </Switch>
    </Router>
  );
};


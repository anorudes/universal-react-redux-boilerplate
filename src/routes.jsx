import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { App } from './containers/App/';
import { Home } from './containers/Home/';

const configureRoutes = (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  );
}

export { configureRoutes };

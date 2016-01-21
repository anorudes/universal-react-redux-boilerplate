'use strict';

import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { Home } from './containers';

const configureRoutes = (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}

export { configureRoutes };

'use strict';

const koa = require('koa');
const router = require('koa-router')();
const serve = require('koa-static');

const server = koa();

let app;

if (__DEV__) {
  app = require('./src/server');
  require('./webpack.server')(server);
}

if (__PROD__) {
  app = require('./lib/server');
  server.use(serve('dist'));
}

router.get('*', function* () {
  yield app.run(this.path).then((result) => {
    const status = result.status;
    const response = result.response;
    const redirect = result.redirect;

    if (status) {
      this.status = status;
    }

    if (response) {
      this.body = response;
    } else if (redirect) {
      this.redirect(redirect);
    }
  }).catch((status) => {
    this.status = status || 500;
  });
});
server.use(router.routes());
server.use(router.allowedMethods());

module.exports = server;

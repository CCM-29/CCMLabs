import Cano from 'cano-koa';
import parser from 'koa-bodyparser';
import logger from 'koa-logger';
require('dotenv').config();

const app = new Cano(__dirname);

app.on('error', err => {
  app.log.error('server error', err);
});

module.exports = app.up();

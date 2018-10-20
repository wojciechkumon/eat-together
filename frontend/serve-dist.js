const detect = require('detect-port');
const openBrowser = require('react-dev-utils/openBrowser');
const express = require('express');
const history = require('connect-history-api-fallback');

const defaultPort = 3000;
const CONTEXT_PATH = process.argv.length >= 3 ? process.argv[2] : '';

detect(defaultPort)
  .then(port => {
    startServer(CONTEXT_PATH, port);

    const url = `http://localhost:${port}${CONTEXT_PATH}`;
    console.log(`Distribution files served at: ${url}`);
    console.log('Opening your system browser...');
    openBrowser(url);
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });

const startServer = (contextPath, port) => {
  const app = express();
  app.listen(port);

  // static middleware used twice:
  // https://github.com/bripkens/connect-history-api-fallback/blob/master/examples/static-files-and-index-rewrite/README.md#configuring-the-middleware
  const expressStaticMiddleware = express.static('dist');
  app.use(contextPath, expressStaticMiddleware);
  app.use(contextPath, history());
  app.use(contextPath, expressStaticMiddleware);
};

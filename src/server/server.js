const express = require('express');
const { connection } = require('../config/connection');
const router = require('../config/router');

const app = express();
const port = 3000;

async function bootstrap() {
  await connection;
  router.initt(app);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

bootstrap();

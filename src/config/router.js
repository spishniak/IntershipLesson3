const userRouter = require('../components/user/router');

function initt(server) {
  server.use('/v1/user', userRouter);
}

module.exports = {
  initt,
};

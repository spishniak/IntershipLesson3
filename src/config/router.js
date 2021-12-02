const userRouter = require('../components/user/router');

function initt(server) {
  server.use('/v1/user', userRouter);

  // eslint-disable-next-line no-unused-vars
  server.use((err, req, res, nest) => {
    res.status(404).json({
      error: err?.message,
    });
  });
}

module.exports = {
  initt,
};

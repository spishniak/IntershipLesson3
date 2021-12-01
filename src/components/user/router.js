const { Router } = require('express');
const UserController = require('./controller');

const userRouter = Router();
userRouter.get('/', UserController.findAllUsers);

module.exports = userRouter;

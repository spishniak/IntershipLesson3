const { Router } = require('express');
const UserController = require('./controller');

const userRouter = Router();
userRouter.get('/', UserController.findAllUsers);
userRouter.post('/', UserController.createdUser);
userRouter.put('/:id', UserController.updateUser);

module.exports = userRouter;

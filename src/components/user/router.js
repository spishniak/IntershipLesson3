const { Router } = require('express');
const UserController = require('./controller');
const UserValidator = require('./validation');

const userRouter = Router();
userRouter.get('/', UserController.findAllUsers);
userRouter.post('/', UserValidator.validateCreateUser, UserController.createdUser);
userRouter.put('/:id', UserController.updateUser);
userRouter.patch('/:id', UserController.updateUser);
userRouter.delete('/:id', UserController.deleteUser);
userRouter.get('/:id', UserController.findUserById);

module.exports = userRouter;

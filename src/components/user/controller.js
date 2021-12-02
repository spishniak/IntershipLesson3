const UserService = require('./service');

async function findAllUsers(req, res) {
  const users = await UserService.findAllUsers();
  res.send({ data: users });
}
async function createdUser(req, res) {
  const user = req.body;
  const savedUser = await UserService.createdUser(user);
  res.json({
    data: savedUser,
  });
}

async function updateUser(req, res) {
  const idUser = req.params.id;
  const user = req.body;
  const newUser = await UserService.updatePatchUser(idUser, user);
  res.json({
    data: newUser,
  });
}
async function deleteUser(req, res) {
  const idUser = req.params.id;
  await UserService.deleteUser(idUser);
  res.status(204).end();
}

module.exports = {
  findAllUsers,
  createdUser,
  updateUser,
  deleteUser,
};

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
  const newUser = await UserService.updateUser(idUser, user);
  res.json({
    data: newUser,
  });
}

module.exports = {
  findAllUsers,
  createdUser,
  updateUser,
};

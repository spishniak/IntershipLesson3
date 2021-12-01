const UserService = require('./service');

async function findAllUsers(req, res) {
  const users = await UserService.findAllUsers();
  res.send({ data: users });
}

module.exports = {
  findAllUsers,
};

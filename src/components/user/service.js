const { UserModel } = require('./model');

function findAllUsers() {
  return UserModel.find().lean();
}

function createdUser(user) {
  return UserModel.create(user);
}
function updateUser(idUser, user) {
  return UserModel.findOneAndUpdate(idUser, user);
}

module.exports = {
  findAllUsers,
  createdUser,
  updateUser,
};

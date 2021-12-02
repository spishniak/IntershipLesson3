const { UserModel } = require('./model');

function findAllUsers() {
  return UserModel.find().lean();
}

function createdUser(user) {
  return UserModel.create(user);
}

function updatePatchUser(idUser, user) {
  return UserModel.findOneAndUpdate(idUser, user, { new: true }).lean();
}
function deleteUser(idUser) {
  return UserModel.findByIdAndDelete(idUser);
}

module.exports = {
  findAllUsers,
  createdUser,
  updatePatchUser,
  deleteUser,
};

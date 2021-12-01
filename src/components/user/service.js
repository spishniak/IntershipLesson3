const { UserModel } = require('./model');

function findAllUsers() {
  return UserModel.find().lean();
}

module.exports = {
  findAllUsers,
};

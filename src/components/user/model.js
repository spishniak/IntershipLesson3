const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserModelSchema = new Schema({
  name: String,
  email: String,
});

const UserModel = mongoose.model('UserModel', UserModelSchema);

module.exports = {
  UserModel,
};

const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserModelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserModel = mongoose.model('UserModel', UserModelSchema);

module.exports = {
  UserModel,
};

const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/my_database';

module.exports = {
  connection: mongoose.connect(mongoDB),
};

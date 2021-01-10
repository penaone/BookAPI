const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://StephenPena:**Fbangi1988@cluster0.sj9l3.mongodb.net/BookAPI?retryWrites=true&w=majority" || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

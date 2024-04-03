const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb://localhost:27017/MERN",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
};

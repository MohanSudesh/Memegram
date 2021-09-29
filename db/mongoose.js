const mongoose = require("mongoose");
const { MONGOURI } = require("./config/keys");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DataBase Connected");
});

// "mongodb+srv://mohansudesh:8328473594@task-manager.2chc0.mongodb.net/task-manager?retryWrites=true&w=majority"

//
// mongodb+srv://mohansudesh:8328473594@college-world.2chc0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// mongodb://127.0.0.1:27017/College-World

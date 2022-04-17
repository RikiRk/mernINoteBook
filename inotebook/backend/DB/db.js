const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DBUSER = process.env.DBUSER;
const DBNAME = process.env.DBNAME;
const DBPASSWORD = process.env.DBPASSWORD;

const URL = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.s5gi8.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(URL, {
    // useNewUrlParser: true,
    // useUnifiedTopollogy: true,
  })
  .then(() => {
    console.log("////..NODEJS to MONGODB Connection Establish..////");
  })
  .catch((err) => {
    console.error(
      "Error in DB connection... " + JSON.stringify(err, undefined, 2)
    );
    console.log(err);
    process.exit();
  });
module.exports = mongoose;

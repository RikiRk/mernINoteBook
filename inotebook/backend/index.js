const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbconnect = require("./DB/db.js");

const app = express();
app.use(cors());

//// middlleware
app.use(express.json());


// app.get("/", function(req, res){
//     res.send("Hello World'")
// })


///// route are here 

app.use("/api/auth", require("./routes/auth"))
app.use("/api/note", require("./routes/note"));

dotenv.config();
// eslint-disable-next-line no-unused-expressions
dbconnect;

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Express server started at ${PORT}`));

const express = require("express");
const { json } = require("express/lib/response");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts")
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());

// Connect to DB
mongoose
  .connect(process.env.DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(console.log(`DB connected`))
  .catch((err) => {
    console.log("Error Message from DB:",err);
  });

// handling requests

app.get("/", (req, res) => {
  res.send("This is from the server");
});

app.use("/api/auth", authRoute);
app.use("/api/posts",postsRoute)


// Starting the server

app.listen(PORT, () => {
  console.log("Server listening on port",PORT);
});

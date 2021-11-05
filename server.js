require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.json());

// CORS Middleware

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser Middleware
// app.use(bodyParser.json());

// parse requests of content type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
const users = require("./routes/userRouter");
app.use("/user", users);
// app.use("/api", require("./routes/bookRouter"));
// app.use("/api", require("./routes/categoryRouter"));

const URI = process.env.MONGODB_URL;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// verification connexion à mongo : hedhi zeyda
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Bibliothéque MEAN application !" });
  // res.send("Hamza Invalid Endpoint");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server running at " + port);
});

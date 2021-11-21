require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const fileUpload = require('express-fileupload')
// const cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
// const bodyparser = require("body-parser");
// const path = require("path");

const app = express();
// var app = express();

app.use(express.json());
// app.use(cookieParser());
app.use(cors());

// hedhi ki tzid file image upload yasna3 folder tmp f server
// app.use(fileUpload({
//     useTempFiles: true
// }))

// const userRouter = require("./routes/userRouter");
// app.use("/user", userRouter); // ou bien
// app.use("/user", require("./routes/userRouter"));
app.use("/api", require("./routes/bookRouter"));
// app.use("/api", require("./routes/categoryRouter"));

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("welcome john wick to MongoDB ! connected !!");
  }
);
// .then(() => {
//   console.log("Connecté à backend de MEAN bibliothéque");
// })
// .catch((error) => console.log(error));

// verification connexion à mongo : hedhi zeyda
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

// *********
// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome to chaos !" });
// });

// app.use("/", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "build", "../frontend-angular/build/index.html")
//   );
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server running at ", port);
});

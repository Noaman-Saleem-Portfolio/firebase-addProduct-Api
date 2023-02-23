const express = require("express");

const app = express();
// const cors = require("cors");

//To parse form-data
app.use(
  express.urlencoded({
    extended: true,
  })
);

//To parse JSON-data
app.use(express.json());
// app.use(cors());

const PORT = process.env.PORT || 5000;

//Importing routes
const homeRoute = require("./routes/home_route");
const firebaseRoute = require("./routes/firebase_route");

//using routes
app.use(homeRoute);
app.use(firebaseRoute);

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});

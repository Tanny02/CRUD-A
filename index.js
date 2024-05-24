const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

// * middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose
  .connect(
    "mongodb+srv://tanny:dbnE4ycv778Ocm9w@backenddb.pjapf28.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("Error connecting to DB");
  });

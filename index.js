const express = require("express");
require("dotenv").config();

const urlRoute = require("./routes/url.route");
const { connectDB } = require("./DB/db");
const app = express();
const port = process.env.PORT || 8001;

connectDB(process.env.MONGO_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/url", urlRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

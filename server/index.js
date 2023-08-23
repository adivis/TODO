const express = require("express");
const app = express();
const allRoutes = require("./routes/todos.js");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;
//middleware
app.use(express.json());

//ROUTES
app.use("/", allRoutes);
app.listen(PORT, () => {
  console.log("Server listening");
});

const express = require("express");
const app = express();
const allRoutes = require("./routes/todos.js");

//middleware
app.use(express.json());

//ROUTES
app.use("/", allRoutes);
app.listen(5000, () => {
  console.log("Server listening");
});

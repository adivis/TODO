const express = require("express");
const router = express.Router();
const {
  getTodo,
  updateTodo,
  createTodo,
  getTodos,
  deleteTodo,
} = require("../controllers/todos");
const { body } = require("express-validator");

//get todos
router.get("/todos", getTodos);
//get a todo
router.get("/todos/:id", getTodo);
//create a todo
router.post(
  "/todos",
  [
    body("title").notEmpty(),
    body("description").notEmpty(),
    body("status").notEmpty(),
  ],
  createTodo
);
//update a todo
router.put("/todos/:id", updateTodo);
//delete a todo
router.delete("/todos/:id", deleteTodo);

module.exports = router;

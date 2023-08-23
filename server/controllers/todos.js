const { validationResult } = require("express-validator");
const pool = require("../db");

const getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await pool.query("SELECT * FROM TODO WHERE ID = $1;", [id]);
    if (todo.rows[0]) {
      res.status(200).json(todo.rows[0]);
    } else {
      res.status(404).json({ message: "No Todo with the id mentioned." });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const date = new Date();
    const { title, description, status } = req.body;
    if (title) {
      const todo = await pool.query(
        "UPDATE TODO SET title=$1, updated_at=$2 WHERE ID = $3;",
        [title, date, id]
      );
    }
    if (description) {
      const todo = await pool.query(
        "UPDATE TODO SET description=$1, updated_at=$2 WHERE ID = $3;",
        [description, date, id]
      );
    }
    if (status) {
      const todo = await pool.query(
        "UPDATE TODO SET status=$1, updated_at=$2 WHERE ID = $3;",
        [status, date, id]
      );
    }
    res.status(201).json({ message: "Table Updated." });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(404).json({ errors: `${result.array()[0].path} is empty` });
    }
    const { title, description, status } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (title, description, status) VALUES ($1, $2, $3) RETURNING *;",
      [title, description, status]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};
const getTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM TODO;");
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteTodo = await pool.query("DELETE  FROM TODO WHERE id = $1;", [
      id,
    ]);
    res.json("Todo was deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTodo, updateTodo, createTodo, getTodos, deleteTodo };

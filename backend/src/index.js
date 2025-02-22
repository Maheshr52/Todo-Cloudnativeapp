const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for todos
let todos = [];

// Get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post("/api/todos", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Todo text is required" });
  }

  const newTodo = {
    id: Date.now(), // Generate a unique ID
    text,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
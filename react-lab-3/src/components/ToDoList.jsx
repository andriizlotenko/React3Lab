import React, { useState } from "react";
import ToDoItem from "./TodoItem.jsx";

function TodoList({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "done") return todo.completed;
    if (filter === "not-done") return !todo.completed;
    return true;

    //Wth
  });

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Completed</button>
        <button onClick={() => setFilter("not-done")}>Not Completed</button>
      </div>
      {filteredTodos.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <table className="todo-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Created</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
                removeTodo={removeTodo}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TodoList;

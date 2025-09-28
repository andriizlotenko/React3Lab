import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import TodoList from "./components/ToDoList.jsx";
import AddTodoForm from "./components/AddToDoForm.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("list");
  const [todos, setTodos] = useState([]);

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "add" ? (
        <AddTodoForm
          todos={todos}
          setTodos={setTodos}
          setActiveTab={setActiveTab}
        />
      ) : (
        <TodoList todos={todos} setTodos={setTodos} />
      )}
    </div>
  );
}

export default App;

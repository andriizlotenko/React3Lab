import "./ToDoItem.css";

function TodoItem({ todo, toggleCompleted, removeTodo }) {
  return (
    <tr style={{ opacity: todo.completed ? 0.6 : 1 }}>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{todo.category}</td>
      <td>{new Date(todo.createdAt).toLocaleString()}</td>
      <td>{todo.dueDate}</td>
      <td>{todo.priority}</td>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
        />
      </td>
      <td>
        <button className="delete-btn" onClick={() => removeTodo(todo.id)}>
          ✖
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (

    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">ToDo List</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Agregar tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <ul className="list-group list-group-flush">
        {tasks.length === 0 ? (
          <li className="text-muted text-center">No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center task-item"
            >
              <span>{task}</span>
              <button
                type="button"
                className="btn-close delete-btn"
                onClick={() => deleteTask(index)}
              ></button>
            </li>
          ))
        )}
      </ul>

      
    </div>
  );
}

export default TodoList;
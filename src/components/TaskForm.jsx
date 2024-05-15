import { useState } from "react";
import { tasks } from "../data/tasks";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length,
      title,
      description,
    };
    createTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe una nueva tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <input
        placeholder="Escribe una descripción"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>Añadir</button>
    </form>
  );
}

export default TaskForm;

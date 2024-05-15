import { useState, useContext } from "react";
import { tasks } from "../data/tasks";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

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
    <form onSubmit={handleSubmit} className="bg-gray-800 max-w-sm p-10 rounded-md mb-4 text-center">
      <input
        placeholder="Escribe una nueva tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-gray-200 p-2 rounded-md mb-4 w-full"
      />
      <input
        placeholder="Escribe una descripción"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-gray-200 p-2 rounded-md mb-4 w-full"
      />
      <button className="bg-green-500 px-1 py-1 rounded-md mt-4 hover:bg-green-300 text-white">Añadir</button>
    </form>
  );
}

export default TaskForm;

import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import { tasks as data } from "./data/tasks"
import { useState, useEffect } from "react"

function App() {

  const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data)
    }, [])

    function createTask(task) {
        setTasks([...tasks, task])
    }

  return (
    <div>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
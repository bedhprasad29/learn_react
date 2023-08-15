import './App.css'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      taskName: newTask,
    }
    // let newTodoList = [...tasks, newTask]
    // setTasks(newTodoList);
    setTasks([...tasks, task])
  }

  const deleteTask = (id) => {
    // --- first try
    // const newTodos = tasks.filter((task) => {
    //   if (task === taskName) return false
    //   else return true;
    // })
    // --- second optimize
    // const newTodos = tasks.filter((task) => {
    //   return task !== taskName;
    // })
    // --- third optimize
    // const newTodos = tasks.filter((task) =>  task !== taskName)
    // --- Fourth Optimize
    // setTasks(newTodos)
    setTasks(tasks.filter((task) =>  task.id !== id))
  }

  return <div className="App">
    <div className='addTask'>
      <input onChange={handleChange} />
      <button onClick={addTask}> Add Task </button>
    </div>
    <div className="list">
      {tasks.map((task) => {
        return <div>
          <h3> {task.taskName} </h3> 
          <button onClick={() => deleteTask(task.id)}> Delete </button>
        </div>
      })}
    </div>
  </div>
}

export default App;
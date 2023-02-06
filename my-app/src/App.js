import { useState } from "react";
import "./App.css";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInput = (event) => {
    setNewTask(event.target.value)

  }
  const addTask = () => {
    const task = {
      id : todoList.length===0 ? 1: todoList[todoList.length-1].id +1,
      taskName: newTask,
    }
    const newTodoList = [...todoList, newTask]
    setTodoList(newTodoList)
    // or better
    // setTodoList([...todoList, newTask])
  }

  const deleteTask = (id) => {
    // filter function
   // const newTodoList = todoList.filter((task) => {
    //task!==taskName
    //return task!==taskName
    // or
     //  const newTodoList = todoList.filter((task) =>task!==taskName
    //   if (task === taskName) {
    //     return false
    //   } else {
    //     return true
    //   }
    //})
    setTodoList(todoList.filter((task) => task.id!==id))
  }
  return (
    <div className="App">
      <div className="addTask">
        <input
          onChange={handleInput} />

        <button onClick={addTask}>Add task</button>

      </div>
      <div className="list">
        {todoList.map((task,idx) => {
          return <div><h1 key={idx}>
            {task.taskName}
          </h1>
            {/*if function has parameters*/}
            <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
        })}

      </div>


    </div>
  )
}

export default App;

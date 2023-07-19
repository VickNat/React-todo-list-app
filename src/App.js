import { useState } from 'react';
import './App.css';
import Display from './components/Display';

function App() {
  const [todoInput, setTodoInput] = useState('')
  const [allTasks, setAllTasks] = useState([])
  const [tasksToDisplay, setAllTasksToDisplay] = useState([])

  const handleTodoLabel = (event) => {
    setTodoInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTaskObj = {
      task: todoInput,
      checked: false
    }
    setAllTasks(allTasks.concat(newTaskObj))
    setAllTasksToDisplay(allTasks.concat(newTaskObj))
    setTodoInput('')
  }

  const handleDelete = (event, index) => {
    event.preventDefault()

    const newTasks = allTasks.filter((task, i) => i !== index)
    setAllTasks(newTasks)
    setAllTasksToDisplay(newTasks)
  }

  const handleTasks = (event, button) => {
    event.preventDefault()

    switch (button) {
      case 'button1':
        setAllTasksToDisplay(allTasks.map(task => task))
        break
      case 'button2':
        setAllTasksToDisplay(allTasks.filter((task) => task.checked === true))
        break
      case 'button3':
        setAllTasksToDisplay(allTasks.filter((task) => task.checked === false))
        break
    }
  }

  const handleEdit = (event, index) => {
    event.preventDefault()

    setTodoInput(allTasks[index].task)
    handleDelete(event, index)
  }

  return (
    <div className='container'>
    <h1 className='header'>To do app</h1>
    <form onSubmit={handleSubmit} >
      <input
        className='add-input'
        type="text"
        value={todoInput}
        onChange={handleTodoLabel}
        required
      />
      <button className='add-btn btn' type="submit" >Add</button>
    </form>
    <div className='button-container'>
      <button className='btn' onClick={(event) => handleTasks(event, 'button1')} >All tasks</button>
      <button className='btn' onClick={(event) => handleTasks(event, 'button2')}>Completed tasks</button>
      <button className='btn' onClick={(event) => handleTasks(event, 'button3')}>Incomplete tasks</button>
    </div>
    <div className='display-container'>
      <Display tasks={tasksToDisplay} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
    </div>
  );
}

export default App;

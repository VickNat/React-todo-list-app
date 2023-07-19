import { useState } from "react"

const Todo = ({handleDelete, task, index, handleEdit}) => {
  const [isChecked, setIsChecked] = useState(task.checked)

  const handleChecked = (event) => {
    task.checked = !isChecked
    setIsChecked(task.checked)
  }

  return (
    <>
    <form>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={handleChecked}
      />
      <label>{task.task}</label>
    
      <button className="btn" onClick={(event) => handleEdit(event, index)}>Edit</button>
      <button className="btn" onClick={(event) => handleDelete(event, index)}>Delete</button>
    </form>
    </>
  )
}

export default Todo
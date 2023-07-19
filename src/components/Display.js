import Todo from "./Todo"


const Display = ({tasks, handleDelete, handleEdit}) => {
  const taskLists = tasks.map((task, index) => <li key={index}> <Todo index={index} task={task} handleDelete={handleDelete} handleEdit={handleEdit} /> </li>)

  return (
    <div>
    <ul>{taskLists}</ul>
    </div>
  )
}

export default Display
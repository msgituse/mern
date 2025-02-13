const TodoItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div onClick={() => toggleTaskCompletion(task.id)}>
        <span>{task.todo}</span>
      </div>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
    </li>
  )
}

export default TodoItem
import { useState, useEffect } from 'react'
import TodoList from '@components/TodoList'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@clients/todo'
import AddTodo from '@components/AddTodo'
import Filter from '@components/Filter'

const TodoApp = () => {
  const [tasks, setTasks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [tasksPerPage] = useState(5)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('tasks'))
    if (storedTodos) {
      setTasks(storedTodos)
    } else {
      fetchTodos().then(response => {
        setTasks(response);
        localStorage.setItem('tasks', JSON.stringify(response))
      })
    }
  }, [])

  const getNextId = () => {
    if (tasks.length === 0) {
      return 1
    } else {
      const lastTask = tasks[tasks.length - 1]
      return lastTask.id + 1
    }
  };


  // Update the localStorage whenever todos change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks]);

  // add task 
  const addTask = async (todo) => {
    const newTask = { id: getNextId(), todo, completed: false, userId: 1 }
    try {
      const addedTask = await createTodo(newTask)
      setTasks([...tasks, addedTask])
    } catch (error) {
      console.error('Error adding new task:', error)
    }
  }

  // update task status on click of text
  const toggleTaskCompletion = async (id) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === id)
      const updatedTask = { completed: !taskToUpdate.completed }
      const updatedTodo = await updateTodo(id, updatedTask)
      setTasks(tasks.map((task) => (task.id === id ? updatedTodo : task)))
    } catch (error) {
      console.error('Error updating task:', error);
    }
  }

  // delete task
  const deleteTask = async (id) => {
    try {
      const success = await deleteTodo(id);
      if (success) {
        setTasks(tasks.filter((task) => task.id !== id))
      }
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  // filter task
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true
  });

  const indexOfLastTask = currentPage * tasksPerPage
  const indexOfFirstTask = indexOfLastTask - tasksPerPage
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <AddTodo addTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList
        tasks={currentTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage * tasksPerPage >= filteredTasks.length}>
          Next
        </button>
      </div>
    </div>
  )
}

export default TodoApp
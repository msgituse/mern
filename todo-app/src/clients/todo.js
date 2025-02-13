import apiClient from '@utility/client'

const TODO_API_BASE = '/todos'

// Method to fetch todos (GET)
export const fetchTodos = async () => {
  try {
    const response = await apiClient('GET', TODO_API_BASE)
    return response?.todos
  } catch (error) {
    console.error('Error fetching todos:', error)
    throw error
  }
};

// Method to create a new todo item (POST)
export const createTodo = async (todoData) => {
  try {
    const newTodo = await apiClient('POST', `${TODO_API_BASE}/add`, todoData)
    return newTodo
  } catch (error) {
    console.error('Error creating todo:', error)
    throw error
  }
}

// Method to update an existing todo item (PATCH)
export const updateTodo = async (id, todoData) => {
  try {
    const updatedTodo = await apiClient('PATCH', `${TODO_API_BASE}/${id}`, JSON.stringify(todoData))
    return updatedTodo
  } catch (error) {
    console.error('Error updating todo:', error)
    throw error
  }
}

// Method to delete a todo item (DELETE)
export const deleteTodo = async (id) => {
  try {
    const response = await apiClient('DELETE', `${TODO_API_BASE}/${id}`);
    if (response) {
      return true
    } else {
      throw new Error('Failed to delete todo')
    }
  } catch (error) {
    console.error('Error deleting todo:', error)
    throw error
  }
}
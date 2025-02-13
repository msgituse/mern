import axios from 'axios'

// Base URL for your API
const BASE_URL = 'https://dummyjson.com'

// API Client function to handle GET, POST, and PUT requests
const apiClient = async (method, endpoint, data = null) => {
  try {
    const config = {
      method: method,
      url: `${BASE_URL}${endpoint}`,
      headers: {
        'Content-Type': 'application/json',
      }
    }
    if (!['GET', 'DELETE'].includes(method)) {
      config.data = data;
    }

    const response = await axios(config)
    return response.data
  } catch (error) {
    console.error('Error making request:', error)
    throw error;
  }
};

export default apiClient;
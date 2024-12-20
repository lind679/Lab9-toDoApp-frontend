import axios from 'axios';

// Get the values from environment variables
const API_URL = process.env.REACT_APP_API_URL;
console.log('API URL:', API_URL);
const USERNAME = process.env.REACT_APP_API_USERNAME;
const PASSWORD = process.env.REACT_APP_API_PASSWORD;

// Base64 encode the username:password string for Basic Authentication
const AUTH_HEADER = 'Basic ' + btoa(`${USERNAME}:${PASSWORD}`);

console.log('API URL:', API_URL); // Debugging log
console.log('Username:', USERNAME); // Debugging log
console.log('Password:', PASSWORD); // Debugging log

// Function to create a new task
export const createTask = async (itemData) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, itemData, {
        headers: {
                 'Authorization': AUTH_HEADER,  // Add the Authorization header
                 'Content-Type': 'application/json',  // Ensure content type is JSON
              },
    });
    return response.data;  // Return the created task data from the response
  } catch (error) {
    console.error('Error creating task:', error.response ? error.response.data : error.message);
    throw new Error(error.response?.data?.message || 'Failed to create task');
  }
};

// Function to fetch tasks
export const getTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`, {
        headers: {
                 'Authorization': AUTH_HEADER,  // Add the Authorization header
                 'Content-Type': 'application/json',  // Ensure content type is JSON
              },
    });
    return response.data;  // Return the list of tasks
  } catch (error) {
    console.error('Error fetching tasks:', error.response ? error.response.data : error.message);
    throw new Error(error.response?.data?.message || 'Failed to fetch tasks');
  }
};

// Function to update an existing task
export const updateTask = async (id, itemData) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/${id}`, itemData, {
        headers: {
                 'Authorization': AUTH_HEADER,  // Add the Authorization header
                 'Content-Type': 'application/json',  // Ensure content type is JSON
              },
    });
    return response.data;  // Return the updated task
  } catch (error) {
    console.error('Error updating task:', error.response ? error.response.data : error.message);
    throw new Error(error.response?.data?.message || 'Failed to update task');
  }
};

// Function to delete a task
export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks/${id}`,  {
        headers: {
                 'Authorization': AUTH_HEADER,  // Add the Authorization header
                 'Content-Type': 'application/json',  // Ensure content type is JSON
              },
    });
    return response.data;  // Return the deleted task data
  } catch (error) {
    console.error('Error deleting task:', error.response ? error.response.data : error.message);
    throw new Error(error.response?.data?.message || 'Failed to delete task');
  }
};

import axios from 'axios'

// Base URL for user-related API endpoints
const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  // Send a POST request to the registration endpoint with userData
  const response = await axios.post(API_URL, userData)

  // If the response data is available, store it in local storage
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  // Return the response data
  return response.data
}

// Login user
const login = async (userData) => {
  // Send a POST request to the login endpoint with userData
  const response = await axios.post(API_URL + 'login', userData)

  // If the response data is available, store it in local storage
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  // Return the response data
  return response.data
}

// Logout user
const logout = () => {
  // Remove the user data from local storage
  localStorage.removeItem('user')
}

// Service object containing the functions
const authService = {
  register,
  login,
  logout,
}

// Export the service object as the default export
export default authService
/*
API_URL: This constant holds the base URL for the user-related API endpoints.

register: This function sends a POST request to the registration endpoint with the provided userData. It stores the response data in local storage if available and returns the response data.

login: This function sends a POST request to the login endpoint with the provided userData. It stores the response data in local storage if available and returns the response data.

logout: This function removes the user data from local storage, effectively logging the user out.

authService: This object encapsulates the register, login, and logout functions, serving as the service interface.

Export: The authService object is exported as the default export from the module, allowing other parts of the application to import and use the authentication service.
*/

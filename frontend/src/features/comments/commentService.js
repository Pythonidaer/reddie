// Import the necessary library
import axios from 'axios'

// Define the API URL
const API_URL = '/api/comments/'

// Create new comment
const createComment = async (commentData, token) => {
  // Prepare the request configuration with authorization headers
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  // Send a POST request to create a new comment
  const response = await axios.post(API_URL, commentData, config)

  // Return the response data
  return response.data
}

// Get user comments
const getComments = async (token) => {
  // Prepare the request configuration with authorization headers
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  // Send a GET request to retrieve user comments
  const response = await axios.get(API_URL, config)

  // Return the response data
  return response.data
}

// Get user comment
const getComment = async (commentId, token) => {
  // Prepare the request configuration with authorization headers
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  // Send a GET request to retrieve a specific user comment
  const response = await axios.get(API_URL + commentId, config)

  // Return the response data
  return response.data
}

// Delete user comment
const deleteComment = async (commentId, token) => {
  // Prepare the request configuration with authorization headers
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  // Send a DELETE request to delete a user comment
  const response = await axios.delete(API_URL + commentId, config)

  // Return the response data
  return response.data
}

// Create an object to encapsulate the comment service methods
const commentService = {
  createComment,
  getComments,
  getComment,
  deleteComment,
}

// Export the comment service object as the default export
export default commentService
/*
The axios library is imported to handle HTTP requests.

The API_URL constant is set to the base URL for comment-related API endpoints.

Four asynchronous functions are defined to interact with the comment API:

createComment: Sends a POST request to create a new comment using the provided comment data and authentication token.
getComments: Sends a GET request to retrieve user comments using the authentication token.
getComment: Sends a GET request to retrieve a specific user comment by comment ID, using the authentication token.
deleteComment: Sends a DELETE request to delete a user comment by comment ID, using the authentication token.
Each function prepares the request configuration by including the authorization token in the headers.

The appropriate request is sent using axios with the configured URL, data, and headers.

The response data is extracted from the returned response object and returned from each function.

Finally, an object named commentService is created to encapsulate the comment service methods.

The commentService object is exported as the default export of the module, making it available for use in other parts of the codebase.
*/

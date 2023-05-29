const notFound = (req, res, next) => {
  // Create an error object with a descriptive message
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404) // Set the response status code to 404 (Not Found)
  next(error) // Pass the error to the next error-handling middleware
}

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500 // Get the status code from the response, or default to 500 (Internal Server Error)
  res.status(statusCode) // Set the response status code to the determined status code

  // Return a JSON response with an error message and stack trace (if not in production)
  res.json({
    message: err.message, // Error message from the error object
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Stack trace, only shown in non-production environments
  })
}

export { notFound, errorHandler }
/*
In this code, there are two middleware functions: notFound and errorHandler.

The notFound middleware is responsible for handling requests for routes that are not found. It creates an error object with a descriptive message indicating the requested URL that was not found. The response status code is set to 404 (Not Found), and the error is passed to the next error-handling middleware.

The errorHandler middleware is responsible for handling errors that occur during request processing. It receives the error object as a parameter along with the request, response, and next function. The status code for the response is determined based on the existing status code in the response or defaults to 500 (Internal Server Error). The middleware returns a JSON response containing the error message. In non-production environments, the stack trace of the error is included in the response for debugging purposes, but in production, it is omitted for security reasons.

Finally, both middleware functions are exported using named exports to be used in other files.
*/

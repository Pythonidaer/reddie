import { createContext } from 'react'

// Create a new context using the createContext() function from React
const DataContext = createContext()

export default DataContext
/*
The createContext() function is used to create a new context object. Context provides a way to pass data through the component tree without manually passing props down at every level.
The createContext() function returns an object that consists of two components: a Provider and a Consumer.
The DataContext constant is assigned the newly created context object returned by createContext().
The DataContext is exported as the default export, allowing other components to import and use this context.

Overall, this code sets up the foundation for creating and using a context to share data within a React application. Other components can now import the DataContext and use it as a Provider to provide data to their child components or as a Consumer to access the data within their own components.
*/

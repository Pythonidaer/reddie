import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import commentReducer from '../features/comments/commentSlice'

// Create the Redux store
export const store = configureStore({
  // Define the reducers for the store
  reducer: {
    // Use the authReducer for the 'auth' slice of the store
    auth: authReducer,
    // Use the commentReducer for the 'comments' slice of the store
    comments: commentReducer,
  },
})

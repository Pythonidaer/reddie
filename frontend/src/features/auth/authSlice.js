import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

// Define the initial state of the authentication slice
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Async action: Register new user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      // Handle error and extract error message
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      // Return rejected action with error message
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Async action: Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    // Handle error and extract error message
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()

    // Return rejected action with error message
    return thunkAPI.rejectWithValue(message)
  }
})

// Async action: Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

// Create authentication slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      // Reset state properties
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        // Set loading state when register is pending
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        // Set success state and update user when register is fulfilled
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        // Set error state, error message, and reset user when register is rejected
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        // Set loading state when login is pending
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        // Set success state and update user when login is fulfilled
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        // Set error state, error message, and reset user when login is rejected
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        // Reset user when logout is fulfilled
        state.user = null
      })
  },
})

// Export actions and reducer
export const { reset } = authSlice.actions
export default authSlice.reducer
/*
The necessary imports are included, including createSlice and createAsyncThunk from @reduxjs/toolkit and authService from a local file.

The user variable is initialized by parsing the user data from the local storage. It will be used as the initial user value in the state.

The initialState object is defined with properties for user, isError, isSuccess, isLoading, and message.

Two async thunks, register and login, are created using createAsyncThunk. These thunks handle the registration and login processes asynchronously. They make use of the authService to interact with the authentication API.

An async thunk logout is created to handle the logout process asynchronously. It calls the logout function from authService.

The authSlice is defined using createSlice, which creates the authentication slice with a name and initial state.

The reset reducer is defined to reset the state properties when dispatched.

The extraReducers section of the slice defines how the state should be updated based on different action types. It uses builder to handle different action cases (e.g., register.pending, register.fulfilled, etc.) and updates the state accordingly.

Finally, the reset action and the reducer from the authSlice are exported, along with the default export of the authSlice.reducer function.

The code sets up an authentication slice that handles registration, login, and logout operations. It manages the state related to authentication, including loading, success, error, and user information.
*/

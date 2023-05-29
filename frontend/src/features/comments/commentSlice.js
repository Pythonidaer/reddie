import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import commentService from './commentService'

// Define the initial state for the comment slice
const initialState = {
  comments: [],
  comment: {},
  // For every resource, these four properties you have
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create async thunk for creating a new comment
export const createComment = createAsyncThunk(
  'comments/create',
  async (commentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await commentService.createComment(commentData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Create async thunk for getting user comments
export const getComments = createAsyncThunk(
  'comments/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await commentService.getComments(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Create async thunk for getting a user comment
export const getComment = createAsyncThunk(
  'comments/get',
  async (commentId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await commentService.getComment(commentId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Create async thunk for deleting a user comment
export const deleteComment = createAsyncThunk(
  'comments/delete',
  async (commentId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await commentService.deleteComment(commentId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Create the comment slice using createSlice
export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state for createComment async thunk
      .addCase(createComment.pending, (state) => {
        state.isLoading = true
      })
      // Handle fulfilled state for createComment async thunk
      .addCase(createComment.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      // Handle rejected state for createComment async thunk
      .addCase(createComment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // Handle pending state for getComments async thunk
      .addCase(getComments.pending, (state) => {
        state.comment = null
      })
      // Handle fulfilled state for getComments async thunk
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload
      })
      // Handle fulfilled state for getComment async thunk
      .addCase(getComment.fulfilled, (state, action) => {
        state.comment = action.payload
      })
      // Handle pending state for deleteComment async thunk
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true
      })
      // Handle fulfilled state for deleteComment async thunk
      .addCase(deleteComment.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      // Handle rejected state for deleteComment async thunk
      .addCase(deleteComment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

// Extract and export the reset action from the comment slice
export const { reset } = commentSlice.actions

// Export the comment reducer
export default commentSlice.reducer

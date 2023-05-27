import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import commentService from './commentService'

const initialState = {
  comments: [],
  comment: {},
  //   For every resource, these four properties you have
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new comment
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

// Get user comments
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

// Get user comment
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

// Delete user comment
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

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createComment.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getComments.pending, (state) => {
        state.comment = null
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.comment = action.payload
      })
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteComment.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = commentSlice.actions
export default commentSlice.reducer

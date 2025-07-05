import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./authServices"


const userExist = JSON.parse(localStorage.getItem('user'))

const  authSlice = createSlice({
     name: 'auth',
     initialState: {
          user: userExist || null,
          isloading: false,
          isSuccess: false,
          isError: false,
          message : '',
     },
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(registerUser.pending, (state) => {
                    state.isloading = true
                    state.isSuccess = false
                    state.isError = false
                    state.message = ''
               })
               .addCase(registerUser.fulfilled, (state, action) => {
                    state.isloading = false
                    state.isSuccess = true
                    state.user = action.payload
                    state.message = 'User registered successfully'
               })
               .addCase(registerUser.rejected, (state, action) => {
                    state.isloading = false
                    state.isSuccess = false
                    state.isError = true
                    state.message = action.payload || 'Failed to register user'
               })
               .addCase(loginUser.pending, (state) => {
                    state.isloading = true
                    state.isSuccess = false
                    state.isError = false
                    state.message = ''
               })
               .addCase(loginUser.fulfilled, (state, action) => {
                    state.isloading = false
                    state.isSuccess = true
                    state.user = action.payload
                    state.message = 'User logged in successfully'
               })
               .addCase(loginUser.rejected, (state, action) => {
                    state.isloading = false
                    state.isSuccess = false
                    state.isError = true
                    state.message = action.payload || 'Failed to login user'
               })
               .addCase(logoutUser.pending, (state) => {
                    state.isloading = true
                    state.isSuccess = false
                    state.isError = false
                    state.message = ''
               })
               .addCase(logoutUser.fulfilled, (state) => {
                    state.isloading = false
                    state.isSuccess = true
                    state.user = null
                    state.message = 'User logged out successfully'
               })
               .addCase(logoutUser.rejected, (state, action) => {
                    state.isloading = false
                    state.isSuccess = false
                    state.isError = true
                    state.message = action.payload || 'Failed to logout user'
               })
     }
})

export default authSlice.reducer

//Register User
export const registerUser = createAsyncThunk('AUTH/REGISTER', async (formData, thunkAPI) => {
     try {
          return await authService.register(formData)
     } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
          return thunkAPI.rejectWithValue(message)
     }
})

// Login User

export const loginUser = createAsyncThunk('AUTH/LOGIN', async(formData, thunkAPI) =>{
     try{
          return await authService.login(formData)
     }catch(error){
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
          return thunkAPI.rejectWithValue(message)
     }
})

// Logout User
export const logoutUser = createAsyncThunk('AUTH/LOGOUT', async () => {
     localStorage.removeItem('user')
})
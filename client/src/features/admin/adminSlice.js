import { zalgo } from "colors";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const adminSlice = createSlice({
     name : 'admin',
     initialState:{
        user: [],
        addCategory : [],
        isCategoriesLoading : false,
        isError : false
     },
     reducers:{},
     extraReducers: (builder) => {
          builder
          .addCase(addCategory.pending, (state, action) => {
               state.isloading = true
               state.isSuccess = false
               state.isError = false
               state.message = ''
          })
          .addCase(addCategory.fulfilled, (state, action) =>{
               state.isloading = false
               state.isSuccess = true
               state. = action.payload
               state.message = 'User registered successfully'
          })
          .addCase(addCategory.rejected, (state, action) => {
               state.isloading = false
               state.isSuccess = false
               state.isError = true
               state.message = action.payload || 'Failed to register user'
          })
     }
})

export default adminSlice.reducer

export const addCategory = createAsyncThunk('', async (__, thunkAPI) =>{

     try {
          
     } catch (error) {
          const message = error.response.data.message
          return thunkAPI.rejectWithValue(message)
     }
})

export const getAllCategories = createAsyncThunk('', async (__, thunkAPI)=>{
     try {
          
     } catch (error) {
          const message = error.response.data.message
          return thunkAPI.rejectWithValue(message)
})

export const updateCategory = createAsyncThunk('', async (__, thunkAPI)=>{
     try {
          
     } catch (error) {
         const message = error.response.data.message
          return thunkAPI.rejectWithValue(message) 
     }
})

export const deletecategory = createAsyncThunk('', async (__, thunkAPI)=>{
     try {
          
     } catch (error) {
          const message = error.response.data.message
          return thunkAPI.rejectWithValue(message)
     }
})


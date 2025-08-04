
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminServices from "./adminServices";

const adminSlice = createSlice({
     name : 'admin',
     initialState:{
        allUsers: [],
        Categories: [],
        Products: [],
        constants: [],   
        appointments: [],   
        adminLoading: false,   
        adminSuccess: false,
        adminError: false,
        adminErrrorMessage: "",
        editCategory: {
          category: {},
          isEdit: false
        }
     },
     reducers:{
          categoryEdit: (state, action) =>{
               return {
                    ...state, 
                    editCategory:{
                         category: action.payload,
                         isEdit: true
                    }
               }
          }
     },
     extraReducers: (builder) => {
          builder
          .addCase(getallUser.pending, (state, action) => {
               state.adminLoading = true;
               state.adminSuccess = false;
               state.adminError = false;
               state.adminErrrorMessage = "";

          })
          .addCase(getallUser.fulfilled, (state, action) => {
               state.adminLoading = false;
               state.adminSuccess = true;
               state.allUsers = action.payload;
               state.adminError = false;
               state.adminErrrorMessage = "";
          })
          .addCase(getallUser.rejected, (state, action) => {
               state.adminLoading = false;
               state.adminSuccess = false;
               state.adminError = true;
               state.adminErrrorMessage = action.payload;
          })
          .addCase(getAllCategories.pending, (state, action) => {
               state.adminLoading = true;
               state.adminSuccess = false;
               state.adminError = false;
               state.adminErrrorMessage = "";
          })
          .addCase(getAllCategories.fulfilled, (state, action) => {
               state.adminLoading = false;
               state.adminSuccess = true;
               state.Categories = action.payload;
               state.adminError = false;
               state.adminErrrorMessage = "";
          })
          .addCase(getAllCategories.rejected, (state, action) => {
               state.adminLoading = false;
               state.adminSuccess = false;
               state.adminError = true;
               state.adminErrrorMessage = action.payload;
          })
          .addCase(addCategory.pending, (state, action) => {
               state.adminLoading = true;
               state.adminSuccess = false;
               state.adminError = false;
               state.adminErrrorMessage = "";
          })
          .addCase(addCategory.fulfilled, (state, action) => {
               state.adminLoading = false;
               state.adminSuccess = true;
               state.Category = [action.payload, ...state.Categories];
               state.adminError = false;
               state.adminErrrorMessage = "";
          })
          .addCase(addCategory.rejected, (state, action) => {
               state.adminLoading = false;
               state.adminSuccess = false;
               state.adminError = true;
               state.adminErrrorMessage = action.payload;
          })
          .addCase(updateCategory.pending, (state, action) => {
               state.adminLoading = true;
               state.adminSuccess = false;
               state.adminError = false;
               state.adminErrrorMessage = "";
          })
          .addCase(updateCategory.fulfilled, (state, action) => {
               state.adminLoading = false;
               state.adminSuccess = true;
               state.Category = action.payload ;
               state.adminError = false;
               state.adminErrrorMessage = "";
          })
          .addCase(updateCategory.rejected, (state, action) => {
               state.adminLoading = false;
               state.adminSuccess = false;
               state.adminError = true;
               state.adminErrrorMessage = action.payload;
          })
          .addCase(deleteCategory.pending, (state, action) => {
               state.adminLoading = true;
               state.adminSuccess = false;
               state.adminError = false;
               state.adminErrrorMessage = "";
          })
          .addCase(deleteCategory.fulfilled, (state, action) => {
               state.adminLoading = false;
               state.adminSuccess = true;
               state.Category = action.payload;
               state.adminError = false;
               state.adminErrrorMessage = "";
          })
          .addCase(deleteCategory.rejected, (state, action) => {
               state.adminLoading = false;
               state.adminSuccess = false;
               state.adminError = true;
               state.adminErrrorMessage = action.payload;
          })
          
     }
})

export default adminSlice.reducer


export const getallUser = createAsyncThunk('ADMIN/GETALLUSERS', async (_, thunkAPI) => {
     const token = thunkAPI.getState().auth.user.token;
     try {
          return await adminServices.fetchAllUsers(token);
     } catch (error) {
          const message = error.response.data.message || error.message;
          return thunkAPI.rejectWithValue(message);
     }
})

export const getAllCategories = createAsyncThunk('ADMIN/GETCATEORIES', async (_, thunkAPI)=>{
     const token = thunkAPI.getState().auth.user.token;
     // console.log('Token in Redex', token)
     try {
          return await adminServices.getAllCategories(token)  
     } catch (error) {
          const message = error.response.data.message
          return thunkAPI.rejectWithValue(message)
     }
})

export const addCategory = createAsyncThunk('ADMIN/ADD/CATEGORY', async (formData, thunkAPI) =>{
     const token = thunkAPI.getState().auth.user.token
     try {
          return await adminServices.addCategory(formData, token)
     } catch (error) {
          const message = error.response.data.message
          return thunkAPI.rejectWithValue(message)
     }
})

export const updateCategory = createAsyncThunk('ADMIN/UPDATE/CATEGORY', async (categoryData, thunkAPI)=>{
     const token = thunkAPI.getState().auth.user.token;
     try {
          return await adminServices.updateCategory(categoryData, token)
     } catch (error) {
         const message = error.response.data.message
          return thunkAPI.rejectWithValue(message) 
     }
})

export const deleteCategory = createAsyncThunk('ADMIN/DELETE/CATEGORY', async (id, thunkAPI)=>{
     const token = thunkAPI.getState().auth.user.token;
     try {
         return await adminServices.deleteCategory(id, token) 
     } catch (error) {
          const message = error.response.data.message
          return thunkAPI.rejectWithValue(message)
     }
})


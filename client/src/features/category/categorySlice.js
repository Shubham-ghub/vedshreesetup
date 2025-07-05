
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import categoryService from "./categoryServices";


// const categorySlice = createSlice({
//     name: 'category',
//      initialState: {
//           categories: [],
//           isLoading: false,
//           isSuccess: false,
//           isError: false,
//           message: '',
//      },
//      reducers: {},
//      extraReducers: (builder) => {
//           builder
//                .addCase(addCategory.pending, (state) => {
//                     state.isLoading = true
//                     state.isSuccess = false
//                     state.isError = false
//                     state.message = ''
//                })
//                .addCase(addCategory.fulfilled, (state, action) => {
//                     state.isLoading = false
//                     state.isSuccess = true
//                     state.categories.push(action.payload.newcategory)
//                     state.message = action.payload.message
//                })
//                .addCase(addCategory.rejected, (state, action) => {
//                     state.isLoading = false
//                     state.isSuccess = false
//                     state.isError = true
//                     state.message = action.payload || 'Failed to add category'
//                })
//                .addCase(getAllCategories.pending, (state) => {
//                     state.isLoading = true
//                     state.isSuccess = false
//                     state.isError = false
//                     state.message = ''
//                })
//                .addCase(getAllCategories.fulfilled, (state, action) => {
//                     state.isLoading = false
//                     state.isSuccess = true
//                     state.categories = action.payload
//                     state.message = fase
//                })
//                .addCase(getAllCategories.rejected, (state, action) => {
//                     state.isLoading = false;
//                     state.isSuccess = false;
//                     state.isError = true;
//                     state.message = action.payload || 'Failed to fetch categories';
//                })
//                .addCase(updateCategory.pending, (state) => {
//                     state.isLoading = true;
//                     state.isSuccess = false;
//                     state.isError = false;
//                     state.message = '';
//                })
//                .addCase(updateCategory.fulfilled, (state, action) => {
//                     const index = state.categories.findIndex(cat => cat._id === action.payload.updateCategory._id);
//                     if (index !== -1) {
//                          state.categories[index] = action.payload.updateCategory;
//                          state.message = action.payload.message;
//                          state.isSuccess = true;
//                          state.isLoading = false;
//                          return; // Exit early after updating
//                     }
//                })
//                .addCase(updateCategory.rejected, (state, action) => {
//                     state.isLoading = false;
//                     state.isSuccess = false;
//                     state.isError = true;
//                     state.message = action.payload || 'Failed to update category';
//                })
//                .addCase(deleteCategory.pending, (state) => {
//                     state.isLoading = true;
//                     state.isSuccess = false;
//                     state.isError = false;   
//                     state.message = '';
//                })
//                .addCase(deleteCategory.fulfilled, (state, action) => {     
//                     state.isLoading = false;
//                     state.isSuccess = true;
//                     state.categories = state.categories.filter(cat => cat._id !== action.payload.id);
//                     state.message = action.payload.message;
//                })
//                .addCase(deleteCategory.rejected, (state, action) => {
//                     state.isLoading = false;
//                     state.isSuccess = false;
//                     state.isError = true;
//                     state.message = action.payload || 'Failed to delete category';
//                })
//                .addCase(getCategoryById.pending, (state) => {
//                     state.isLoading = true;
//                     state.isSuccess = false;
//                     state.isError = false;
//                     state.message = '';
//                })
//                .addCase(getCategoryById.fulfilled, (state, action) => {
//                     state.isLoading = false;
//                     state.isSuccess = true;
//                     const category = action.payload.category;
//                     state.categories = state.categories.map(cat => 
//                         cat._id === category._id ? category : cat
//                     );
//                     state.message = action.payload.message;
//                }
//                )
//                .addCase(getCategoryById.rejected, (state, action) => {          
//                     state.isLoading = false;
//                     state.isSuccess = false;
//                     state.isError = true;
//                     state.message = action.payload || 'Failed to fetch category by ID';
//                });
//      },
// });


// export default categorySlice.reducers

// export const addCategory = createAsyncThunk('category/addCategory', async (formData, thunkAPI) => {
//           try {
//                return await categoryService.addCategory(formData);
//           } catch (error) {
//                const message = error.response?.data?.message || error.message || error.toString();
//                return thunkAPI.rejectWithValue(message);
//           }
//      }
// );

// export const getAllCategories = createAsyncThunk('category/getAllCategories', async (_, thunkAPI) => {
//           try {
//                return await categoryService.getAllCategories();
//           } catch (error) {
//                const message = error.response?.data?.message || error.message || error.toString();
//                return thunkAPI.rejectWithValue(message);
//           }
//      }
// );
// export const updateCategory = createAsyncThunk('category/updateCategory', async ({ id, formData }, thunkAPI) => {
//           try {
//                return await categoryService.updateCategory(id, formData);
//           } catch (error) {
//                const message = error.response?.data?.message || error.message || error.toString();
//                return thunkAPI.rejectWithValue(message);
//           }
//      }
// );
// export const deleteCategory = createAsyncThunk('category/deleteCategory', async (id, thunkAPI) => {
//           try {
//                return await categoryService.deleteCategory(id);
//           } catch (error) {
//                const message = error.response?.data?.message || error.message || error.toString();
//                return thunkAPI.rejectWithValue(message);
//           }
//      }
// );

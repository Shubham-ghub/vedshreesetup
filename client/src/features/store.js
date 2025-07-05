import { configureStore } from '@reduxjs/toolkit';

import auth from './auth/authSlice';
// import category from './category/categorySlice';


export const store = configureStore({
  reducer: {auth,  },
});
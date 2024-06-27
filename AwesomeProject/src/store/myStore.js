import {configureStore} from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import userSlice from './slices/LoginCredentials';
const store = configureStore({
  reducer: {
    products: productReducer,
    LoginCredentials: userSlice,
  },
});
export default store;

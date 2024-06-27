import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productsSlice";
import orderReducers from "./slices/orderSlice";
import userReducer from "./slices/userSlice";
import loginReducer from "./slices/logInSlice";
import productInfoReducer from "./slices/singleProductSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    orders: orderReducers,
    users: userReducer,
    loginCredentials: loginReducer,
    productInfo: productInfoReducer,
  },
});

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
  IDLE: "idle",
};

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    status: STATUSES.IDLE,
    data: [],
  },
  extraReducers: (bundler) => {
    bundler.addCase(fetchOrders.pending, (state, action) => {
      console.log(action.payload);
      state.status = STATUSES.LOADING;
    });
    bundler.addCase(fetchOrders.rejected, (state, action) => {
      state.addCase = STATUSES.ERROR;
    });
    bundler.addCase(fetchOrders.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.status = STATUSES.ERROR;
      }
      state.status = STATUSES.SUCCESS;

      state.data = action.payload;
    });
  },
});

export const fetchOrders = createAsyncThunk("fetchOrders", async (page = 1) => {
  const { data } = await axios.get(`/admin/order`);
  return data;
});

export default orderSlice.reducer;

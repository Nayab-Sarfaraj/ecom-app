import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
  IDLE: "idle",
};

export const singleProductSlice = createSlice({
  name: "productInfo",
  initialState: {
    status: STATUSES.IDLE,
    data: [],
  },
  extraReducers: (bundler) => {
    bundler.addCase(fetchProductInfo.pending, (state, action) => {
      console.log(action.payload);
      state.status = STATUSES.LOADING;
    });
    bundler.addCase(fetchProductInfo.rejected, (state, action) => {
      state.addCase = STATUSES.ERROR;
    });
    bundler.addCase(fetchProductInfo.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.status = STATUSES.ERROR;
      }
      state.status = STATUSES.SUCCESS;

      state.data = action.payload;
    });
  },
});

export const fetchProductInfo = createAsyncThunk(
  "fetchProductInfo",
  async (id) => {
    const { data } = await axios.get(`/product/id`);

    return data;
  }
);

export default singleProductSlice.reducer;

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {act, startTransition} from 'react';

export const STATUSES = {
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
  IDLE: 'idle',
};

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    status: STATUSES.IDLE,
    data: [],
  },
  extraReducers: bundler => {
    bundler.addCase(fetchProducts.pending, (state, action) => {
      console.log(action.payload);
      state.status = STATUSES.LOADING;
    });
    bundler.addCase(fetchProducts.rejected, (state, action) => {
      state.addCase = STATUSES.ERROR;
    });
    bundler.addCase(fetchProducts.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.status = STATUSES.ERROR;
      }
      state.status = STATUSES.SUCCESS;

      state.data = action.payload;
    });
  },
});

export const fetchProducts = createAsyncThunk('fetchProducts', async page => {
  const {data} = await axios.get(
    `http://172.16.13.194:8080/api/v1/product?page=${page}`,
  );
  return data;
});

export default productSlice.reducer;

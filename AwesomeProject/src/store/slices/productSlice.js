import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {act, startTransition} from 'react';
import api from '../../utils/api';

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
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      console.log(action.payload);
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.status = STATUSES.ERROR;
      }
      state.status = STATUSES.SUCCESS;

      state.data = action.payload;
    });
  },
});

export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async ({page, category, minValue, mavVal}) => {
    try {
      let link = '';
      if (page === 0) page = 1;
      if (category) {
        link = `/api/v1/product?category=${category}&page=${page}&price[gt]=${minValue}&price[lt]=${mavVal}`;
      } else {
        link = `/api/v1/product?page=${page}&price[gt]=${minValue}&price[lt]=${mavVal}`;
      }

      const {data} = await api.get(link);
      console.log('the fetched products is' );
      console.log(data)
      return data;
    } catch (error) {
      console.log('error while fetcing');
      console.log(error);
    }
  },
);

export default productSlice.reducer;

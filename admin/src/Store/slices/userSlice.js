import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
  IDLE: "idle",
};

export const userSlice = createSlice({
  name: "users",
  initialState: {
    status: STATUSES.IDLE,
    data: [],
  },
  extraReducers: (bundler) => {
    bundler.addCase(fetchUsers.pending, (state, action) => {
      console.log(action.payload);
      state.status = STATUSES.LOADING;
    });
    bundler.addCase(fetchUsers.rejected, (state, action) => {
      state.addCase = STATUSES.ERROR;
    });
    bundler.addCase(fetchUsers.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.status = STATUSES.ERROR;
      }
      state.status = STATUSES.SUCCESS;

      state.data = action.payload;
    });
  },
});

export const fetchUsers = createAsyncThunk("fetchUsers", async (page = 1) => {
  const { data } = await axios.get(`/admin/users`);
  return data;
});

export default userSlice.reducer;

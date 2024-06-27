import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
  IDLE: "idle",
};

export const loginSlice = createSlice({
  name: "loginCredential",
  initialState: {
    status: STATUSES.IDLE,
    data: [],
    isAdmin: false,
  },
  extraReducers: (bundler) => {
    bundler.addCase(logInUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    bundler.addCase(logInUser.rejected, (state, action) => {
      state.addCase = STATUSES.ERROR;
      state.data = [];
      state.isAdmin = false;
    });
    bundler.addCase(logInUser.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.status = STATUSES.ERROR;
        state.isAdmin = false;
        state.data = [];
        return;
      }
      state.data = action.payload;
      console.log(state.data);
      if (state.data?.user.role === "admin") {
        state.isAdmin = true;
        state.status = STATUSES.SUCCESS;
        state.data = action.payload;
      } else {
        state.data = [];
        state.status = STATUSES.ERROR;
        state.isAdmin = false;
      }
    });
    bundler.addCase(logOutUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    bundler.addCase(logOutUser.rejected, (state, action) => {
      state.addCase = STATUSES.ERROR;
    });
    bundler.addCase(logOutUser.fulfilled, (state, action) => {
      if (!action.payload.success) {
        state.status = STATUSES.ERROR;
        return;
      }
      state.status = STATUSES.SUCCESS;
      state.data = [];
      state.isAdmin = false;
    });
    bundler.addCase(fetchProfile.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    bundler.addCase(fetchProfile.rejected, (state, action) => {
      state.addCase = STATUSES.ERROR;
      state.isAdmin = false;
      state.data = [];
    });
    bundler.addCase(fetchProfile.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.status = STATUSES.ERROR;
        state.isAdmin = false;
        state.data = [];
        return;
      }
      state.data = action.payload;
      console.log(state.data);
      if (state.data?.user.role === "admin") {
        console.log("fddfdf");
        state.isAdmin = true;
        state.status = STATUSES.SUCCESS;
        state.data = action.payload;
      } else {
        state.data = [];
        state.status = STATUSES.ERROR;
        state.isAdmin = false;
      }
    });
  },
});

export const logInUser = createAsyncThunk(
  "logInUser",
  async ({ email, password }, { dispatch, getState }) => {
    try {
      const { data } = await axios.post(`/login`, { email, password });
      return data;
    } catch (error) {
      console.log("error while logging in the user " + error.message);
    }
  }
);
export const logOutUser = createAsyncThunk("logOutUser", async () => {
  try {
    const res = await axios.get("/logout");
    return res.data;
  } catch (error) {
    console.log("error while logging out the user " + error.message);
  }
});
export const fetchProfile = createAsyncThunk("fetchProfile", async () => {
  try {
    const { data } = await axios.get(`/me`);
    return data;
  } catch (error) {
    console.log("error while fetching in the user profile " + error.message);
  }
});
export default loginSlice.reducer;

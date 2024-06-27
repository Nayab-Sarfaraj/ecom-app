import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {STATUSES} from './productSlice';
import api from '../../utils/api';
export const LoginSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    status: STATUSES.IDLE,
    data: {},
  },
  extraReducers: builder => {
    builder.addCase(LogInUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
      state.data = {};
    });
    builder.addCase(LogInUser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.isLoggedIn = false;
      state.data = {};
    });
    builder.addCase(LogInUser.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.status = STATUSES.ERROR;
        state.isLoggedIn = false;
        state.data = {};
        return;
      }
      console.log('from the loginSLice ' + action.payload);
      state.status = STATUSES.SUCCESS;
      state.data = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(LogOutUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(LogOutUser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
    builder.addCase(LogOutUser.fulfilled, (state, action) => {
      state.status = STATUSES.SUCCESS;
      state.data = {};
      state.isLoggedIn = false;
    });
    builder.addCase(FetchUserProfile.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(FetchUserProfile.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.data = {};
      state.isLoggedIn = false;
    });
    builder.addCase(FetchUserProfile.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.status = STATUSES.ERROR;
        state.isLoggedIn = false;
        state.data = {};
        return;
      }
      state.status = STATUSES.SUCCESS;
      state.data = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(RegisterUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(RegisterUser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.data = {};
      state.isLoggedIn = false;
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      state.status = STATUSES.SUCCESS;
      state.data = action.payload;
      state.isLoggedIn = true;
    });
  },
});
export const LogInUser = createAsyncThunk(
  'LogInUser',
  async ({email, passsword}) => {
    try {
      const res = await api.post('/api/v1/login', {
        email,
        password: passsword,
      });
      return res.data;
    } catch (error) {
      console.log('error while logging the user ');
      console.log(error);
    }
  },
);
export const LogOutUser = createAsyncThunk('LogOutUser', async () => {
  try {
    const res = await api.get('/api/v1/logout');
    return res.data;
  } catch (error) {
    console.log('error while logging out ');
    console.log(error);
  }
});
export const FetchUserProfile = createAsyncThunk(
  'FetchUserProfile',
  async () => {
    try {
      const res = await api.get('/api/v1/me');
      return res.data;
    } catch (error) {
      console.log('error while fetcing the user profile ');
      console.log(error);
    }
  },
);
export const RegisterUser = createAsyncThunk(
  'RegisterUser',
  async ({email, passsword, name}) => {
    try {
      console.log(email, passsword, name);
      const res = await api.post('/api/v1/register', {
        email,
        password: passsword,
        name,
      });
      return res.data;
    } catch (error) {
      console.log('error while registering the user ');
      console.log(error);
    }
  },
);
export default LoginSlice.reducer;

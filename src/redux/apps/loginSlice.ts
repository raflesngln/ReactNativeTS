import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LoginState {
  isLogin: boolean;
  username: string;
  profilePicture: string;
  value:number;
}

const initialState: LoginState = {
  isLogin: false,
  username: 'rafles',
  profilePicture: '',
  value:0
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setDataLogin: (state, action: any): void => {
      state.isLogin = action.isLogin;
      state.username = action.username;
      state.profilePicture = action.profilePicture;
    },
    logout: (state) => {
      state.isLogin = false;
      state.username = '';
      state.profilePicture = '';
    }
  }
});

// Action creators are generated for each case reducer function
export const { setDataLogin, logout } = loginSlice.actions;

export default loginSlice.reducer;

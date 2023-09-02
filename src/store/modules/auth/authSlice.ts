import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../createStore';

interface AuthState {
  signed: boolean;
}

const initialState: AuthState = {
  signed: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state) => {
      state.signed = true;
    },
    signOut: (state) => {
      state.signed = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export const isAuthenticated = (state: RootState) => state.auth.signed;

export default authSlice.reducer;
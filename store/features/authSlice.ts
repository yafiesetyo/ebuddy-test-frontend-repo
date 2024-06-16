import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    }
  },
});

export const initializeAuth = () => {
  
}

export const { setAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;

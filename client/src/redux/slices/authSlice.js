import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user; // Set user data
      state.token = action.payload.token; // Set token (null if not used)
      state.isAuthenticated = true; // Set authenticated status to true
    },
    logout: (state) => {
      state.user = null; // Clear user data
      state.token = null; // Clear token
      state.isAuthenticated = false; // Set authenticated status to false
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
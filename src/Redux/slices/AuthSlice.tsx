import { createSlice } from "@reduxjs/toolkit";

// Retrieve the user data from local storage
const userFromLocalStorage = localStorage.getItem("user");

// Initialize the initial state based on whether user data exists in local storageP
const initialState = {
  user: userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null,
  userToken: localStorage.getItem("userToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {};
      localStorage.removeItem("userToken");
      state.userToken = null;
      localStorage.removeItem("userToken");
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

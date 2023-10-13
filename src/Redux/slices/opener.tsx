import { createSlice } from "@reduxjs/toolkit";

export const OpenerSlice = createSlice({
  name: "opener",
  initialState: {
    open: false,
  },
  reducers: {
    setOpener: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpener } = OpenerSlice.actions;

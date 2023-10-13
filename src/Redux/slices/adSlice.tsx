import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../interface/common";

interface AdState {
  ad: ProductData | null;
}

const initialState: AdState = {
  ad: null, // Set the initial state as null
};

const AdSlice = createSlice({
  name: "Ad",
  initialState,
  reducers: {
    setAd: (state, action: PayloadAction<ProductData>) => {
      state.ad = action.payload;
    },
  },
});

export const { setAd } = AdSlice.actions;

export default AdSlice.reducer;

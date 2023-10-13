import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../interface/common";

interface CategoriesState {
  Ads: ProductData[];
}

const initialState: CategoriesState = {
  Ads: [],
};

const categoriesSlice = createSlice({
  name: "AllAds",
  initialState,
  reducers: {
    setAds: (state, action: PayloadAction<ProductData[]>) => {
      state.Ads = action.payload;
    },
  },
});

export const { setAds } = categoriesSlice.actions;

export default categoriesSlice.reducer;

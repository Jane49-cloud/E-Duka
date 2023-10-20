import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ProductData } from "../../interface/common";
import { fetchOurProducts } from "../hooks/Ads.actions";

interface ProductsState {
  Ads: ProductData[];
  isLoading: boolean;
}

const initialState: ProductsState = {
  Ads: [],
  isLoading: false,
};

export const FetchProductsAsync = createAsyncThunk(
  "ads/fetchproductsasync",
  async () => {
    try {
      const response = await fetchOurProducts();
      return response.data.Data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; // Re-throw the error to be caught by the rejection handler
    }
  }
);

const productsSlice = createSlice({
  name: "Products", // Renamed the slice to "Products"
  initialState,
  reducers: {
    setAds: (state, action) => {
      state.Ads = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchProductsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchProductsAsync.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.Ads = action.payload;
      })
      .addCase(FetchProductsAsync.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { setAds } = productsSlice.actions;

export default productsSlice.reducer;

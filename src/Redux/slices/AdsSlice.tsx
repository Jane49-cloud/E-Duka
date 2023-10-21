import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ProductData } from "../../interface/common";
import { fetchOurProducts, fetchSellersProduct } from "../hooks/Ads.actions";
import { toast } from "react-toastify";

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
      console.log(response);
      return response.data.Data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; // Re-throw the error to be caught by the rejection handler
    }
  }
);

export const FetchSellerProducts = createAsyncThunk(
  "ads/fetchsellerproducts",
  async (id: any) => {
    try {
      const response = await fetchSellersProduct(id);
      console.log(response);
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
    builder
      .addCase(FetchSellerProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchSellerProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Ads = action.payload;
      })
      .addCase(FetchSellerProducts.rejected, (state) => {
        state.isLoading = false;
        toast.error("Error fetching seller products. Please try again later.");
      });
  },
});

export const { setAds } = productsSlice.actions;

export default productsSlice.reducer;

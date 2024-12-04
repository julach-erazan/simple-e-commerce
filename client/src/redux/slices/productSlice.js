import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    productList: [],
    isSuccess: false,
    error: null,
  },
  reducers: {
    request: (state) => {
      state.isLoading = true;
    },
    success: (state, action) => {
      state.isLoading = false;
      state.productList = action.payload;
      state.isSuccess = true;
    },
    reject: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    reset: (state) => {
      state.isLoading = false;
      state.productList = [];
      state.error = null;
      state.isSuccess = false;
    },
  },
});

export const {
  requst: requestProductList,
  success: successProductList,
  reject: rejectProductList,
  reset: resetProductList,
} = productSlice.actions;

export default productSlice.reducer;

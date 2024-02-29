import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  errorMessage: null,
  isLoading: true,
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialValues,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.isLoading = false;
    },
    errorMessage: (state, action) => {
      state.errorMessage = action.payload.errorMsg;
    },
  },
});

export const { setProducts, errorMessage } = productsSlice.actions;

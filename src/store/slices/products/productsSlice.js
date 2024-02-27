import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    products : [],
    isLoading: true
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialValues,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.isLoading = false
    },
  },
});

export const { setProducts } = productsSlice.actions;

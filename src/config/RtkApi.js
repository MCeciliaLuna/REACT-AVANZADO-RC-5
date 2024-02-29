import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products"
    }),
    getProduct: builder.query({
        query: (id) => `/product/${id}`
    })
  })
});

export const { useGetProductsQuery, useGetProductQuery } = rtkApi
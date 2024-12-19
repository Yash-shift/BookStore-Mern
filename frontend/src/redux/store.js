import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/cart/cartSlice";
import booksapi from "./features/cart/booksApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksapi.reducerPath]: booksapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksapi.middleware),
});

import { configureStore } from "@reduxjs/toolkit";
import notification from "./slices/notificationSlice";
import products from "./slices/productSlice";

const store = configureStore({
  reducer: {
    notification,
    products,
  },
});

export default store;

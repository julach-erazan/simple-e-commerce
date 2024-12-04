import { combineReducers } from "@reduxjs/toolkit";
import products from "./slices/productSlice";
import cart from "./slices/cartSlice";
import notification from "./slices/notificationSlice";

const reducer = combineReducers({
    cart,
    notification,
    products
})

export default reducer;
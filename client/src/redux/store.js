
import { configureStore } from "@reduxjs/toolkit";
import notification from "./slices/notificationSlice"

const store = configureStore({
    reducer: {
        notification
    }
});

export default store;
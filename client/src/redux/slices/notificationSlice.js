import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    isOpen: false,
    type: null,
    message: "",
    description: ""
  },
  reducers: {
    open: (state, action) => {
      const { type, message, description } = action.payload;
      state.message = message;
      state.type = type;
      state.description = description;
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
      state.message = "";
      state.description = ""
      state.type = null;
    },
  },
});

export const notificationType = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  INFO: "info",
};

export const { open: openNotification, close: closeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;

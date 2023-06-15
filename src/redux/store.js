import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users : UsersSlice
  },
});

export default store;

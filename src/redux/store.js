import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from './UsersSlice';
const store = configureStore({
  reducer: {
    users : UsersSlice
  },
});

export default store;

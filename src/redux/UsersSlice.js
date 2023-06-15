import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: true,
    error: undefined,
  },
  reducers: {},
  extraReducers: {},
});
export const { reducer: userReducer } = UsersSlice;
export default UsersSlice.reducer;

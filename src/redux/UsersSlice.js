import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchdata = createAsyncThunk("fetchdata", async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=5");
  const result = response.data;
  return result.results
    
  } catch (error) {
    throw new Error("Failed to load data...");
  }
});

const UsersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: undefined,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchdata.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchdata.rejected, (state, action) => {
      state.error = "some error occured";
      state.isLoading = false;
    });

    builder.addCase(fetchdata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      console.log(action.payload)
    });
  },
});
export const { reducer: userReducer } = UsersSlice;
export default UsersSlice.reducer;

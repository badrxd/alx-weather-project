// script that get me the user location when he access to website for the first time

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  isSucces: false,
  // location: null,
};

// the fetch function that bring to me the location.
export const GetLocation = createAsyncThunk(
  "location/city",
  async (args, thunkAPI) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`);
      const { location } = await res.json();
      if (location.status === "fail") {
        return rejectWithValue({ error: true });
      }
      return location;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue({ error: true });
    }
  }
);

// handle actions
const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    /*
    change : the Action (function) that updates the location sent by input
    action.payload: the location (city)
    */
    change: (state, action) => {
      state.location = action.payload;
      state.isError = false;
    },
    resetLocation: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSucces = false;
      state.location = null;
    },
  },
  /*
    extraReducers : handel the 3 steps of the fetch loading , success and error
    */
  extraReducers: (builder) => {
    builder.addCase(GetLocation.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(GetLocation.fulfilled, (state, action) => {
      state.location = action.payload.city;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(GetLocation.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { change, resetLocation } = locationSlice.actions;

export default locationSlice.reducer;

// script that get me the weather based on the city

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  isSucces: false,
  weather: null,
};

// the fetch function that bring to me the weather for city
export const GetWeather = createAsyncThunk(
  "weather/all",
  // args: the city
  async (args, thunkAPI) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/${args}`);
      let weather = await res.json();
      return weather;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue({ error: true });
    }
  }
);

// handle actions
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  /*
    extraReducers : handel the 3 steps of the fetch loading , success and error
    */
  extraReducers: (builder) => {
    builder.addCase(GetWeather.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(GetWeather.fulfilled, (state, action) => {
      state.weather = action.payload;
      state.isLoading = false;
    });
    builder.addCase(GetWeather.rejected, (state, action) => {});
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;

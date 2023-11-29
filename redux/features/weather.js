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
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/${args}`);
      let weather = await res.json();
      if (weather?.error) {
        return rejectWithValue({ error: true });
      }
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
  reducers: {
    resetweather: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSucces = false;
      state.weather = null;
    },
  },
  /*
    extraReducers : handel the 3 steps of the fetch loading , success and error
    */
  extraReducers: (builder) => {
    builder.addCase(GetWeather.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(GetWeather.fulfilled, (state, action) => {
      state.weather = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(GetWeather.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { resetweather } = weatherSlice.actions;

export default weatherSlice.reducer;

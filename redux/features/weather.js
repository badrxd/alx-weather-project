import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  isSucces: false,
  weather: {},
};

// First, create the thunk
export const GetWeather = createAsyncThunk(
  "weather/all",
  async (args, thunkAPI) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/${args}`);
      let weather = await res.json();
      console.log(weather.location.name);
      return weather;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue({ error: true });
    }
  }
);

// Then, handle actions in your reducers:
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(GetWeather.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(GetWeather.fulfilled, (state, action) => {
      state.location = action.payload;
      state.isLoading = false;
      console.log(action);
    });
    builder.addCase(GetWeather.rejected, (state, action) => {});
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;

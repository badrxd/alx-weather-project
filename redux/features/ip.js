// script that get me the user location when he access to website for the first time

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  isSucces: false,
  ip: null,
};

// the fetch function that bring to me the location.
export const GetIp = createAsyncThunk("ip/ip", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(`https://api.ipify.org?format=json`);
    const ip = await res.json();
    if (!ip?.ip) {
      return rejectWithValue({ error: true });
    }
    return ip.ip;
  } catch (error) {
    console.log(error.message);
    return rejectWithValue({ error: true });
  }
});

// handle actions
const IpSlice = createSlice({
  name: "ip",
  initialState,
  reducers: {
    /*
    change : the Action (function) that updates the location sent by input
    action.payload: the location (city)
    */
  },
  /*
    extraReducers : handel the 3 steps of the fetch loading , success and error
    */
  extraReducers: (builder) => {
    builder.addCase(GetIp.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(GetIp.fulfilled, (state, action) => {
      state.ip = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(GetIp.rejected, (state, action) => {
      state.ip = "";
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const {} = IpSlice.actions;

export default IpSlice.reducer;

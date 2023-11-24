import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  isSucces: false,
  location: "",
};

// First, create the thunk
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

// Then, handle actions in your reducers:
const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    change: (state, action) => {
      state.location = action.payload;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetLocation.pending, (state, action) => {
      state.isLoading = true;
      console.log(action);
    });
    builder.addCase(GetLocation.fulfilled, (state, action) => {
      state.location = action.payload.city;
      state.isLoading = false;
      state.isError = false;
      console.log(action);
    });
    builder.addCase(GetLocation.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log(action);
    });
  },
});

export const { change } = locationSlice.actions;

export default locationSlice.reducer;

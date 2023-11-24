import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temp: 0,
  pres: 0,
  windS: 0,
};

export const changeIndex = createSlice({
  name: "setting",
  initialState,
  reducers: {
    change: (state, action) => {
      const { i, type } = action.payload;
      state[type] = i;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = changeIndex.actions;

export default changeIndex.reducer;

// this script handel changes on the settings page , change the index of units..
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temp: 0,
  pres: 0,
  windS: 0,
  page: 0,
};

export const changeIndex = createSlice({
  name: "setting",
  initialState,
  reducers: {
    /*
    change : the Action (function) that chnage the index to select the unit
    i: the index
    type: pointer to the variable that i want to give him the index
    */
    changeSettings: (state, action) => {
      const { i, type } = action.payload;
      {
        state[type] != i ? (state[type] = i) : null;
      }
    },
    resetSettings: (state, action) => {
      state.temp = 0;
      state.pres = 0;
      state.windS = 0;
      state.page = 0;
    },
  },
});

export const { changeSettings } = changeIndex.actions;

export default changeIndex.reducer;

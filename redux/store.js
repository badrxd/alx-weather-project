import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/settings";
import locationSlice from "./features/location";
import weatherSlice from "./features/weather";

export const store = configureStore({
  reducer: {
    settings: counterReducer,
    location: locationSlice,
    weather: weatherSlice,
  },
});

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/settings";
import locationSlice from "./features/location";
import weatherSlice from "./features/weather";
import IpSlice from "./features/ip";
// import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { resetweather } from "./features/weather";
import { resetLocation } from "./features/location";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const rootReducer = combineReducers({
  settings: counterReducer,
  location: locationSlice,
  weather: weatherSlice,
  ip: IpSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store, null, () => {
  const error = store.getState().weather.isError;
  if (error) {
    store.dispatch(resetLocation());
    store.dispatch(resetweather());
  }
});

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/settings";
// import locationSlice from "./features/location";
// import weatherSlice from "./features/weather";

// export const store = configureStore({
//   reducer: {
//     settings: counterReducer,
//     location: locationSlice,
//     weather: weatherSlice,
//   },
// });

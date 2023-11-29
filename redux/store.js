import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/settings";
import locationSlice from "./features/location";
import weatherSlice from "./features/weather";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  sessionStorage,
  storage,
};
const rootReducer = combineReducers({
  settings: counterReducer,
  location: locationSlice,
  weather: weatherSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);

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

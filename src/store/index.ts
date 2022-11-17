import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboard/dashboardSlice";

const reducers = combineReducers({
  dashboard: dashboardSlice.reducer,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

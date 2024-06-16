"use client";

import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { dataTransferReducer } from "./features/dataTransferSlice";

export const makeStore = configureStore({
  reducer: {
    auth: authReducer,
    dataTransfer: dataTransferReducer,
  },
})

// Infer the type of makeStore
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;

import reducerUserSlice from "./Slices/userSlice.mjs";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    User: reducerUserSlice,
  },
});

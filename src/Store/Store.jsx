import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "../components/MainSlice";

export const store = configureStore({
  reducer: {
    myCartData: DataReducer,
  },
});

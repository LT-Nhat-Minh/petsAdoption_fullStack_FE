import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../redux/account/accountSlice";
import languageReducer from "./language/languageSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    language: languageReducer,
  },
});

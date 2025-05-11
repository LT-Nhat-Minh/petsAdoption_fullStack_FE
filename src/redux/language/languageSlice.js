import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEnglish: true,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    doChangeLanguageAction: (state) => {
      state.isEnglish = !state.isEnglish;
    },
  },

  extraReducers: () => {},
});

export const { doChangeLanguageAction } = languageSlice.actions;

export default languageSlice.reducer;

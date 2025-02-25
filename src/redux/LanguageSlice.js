import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LanguageName: "En",
};

export const LanguageSlice = createSlice({
  name: "Language", // Unique name for this slice
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.LanguageName = action.payload;
    },
  },
});

// Action creators are automatically generated for each reducer
export const { changeLanguage } = LanguageSlice.actions;

// Export the reducer
export default LanguageSlice.reducer;

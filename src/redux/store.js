import {configureStore} from "@reduxjs/toolkit"
import LanguageReducer from "./LanguageSlice"
import isLoggedInReducer from "./LoggedSlice"

export const store = configureStore({
  reducer: {
    Language: LanguageReducer,
    isLoggedIn: isLoggedInReducer,
  },
})

export default store

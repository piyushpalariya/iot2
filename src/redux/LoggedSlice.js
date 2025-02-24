import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  isLoggedIn: false,
}

export const LoggedSlice = createSlice({
  name: "isLoggedIn", // Unique name for this slice
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
  },
})

// Action creators are automatically generated for each reducer
export const {setIsLoggedIn} = LoggedSlice.actions

// Export the reducer
export default LoggedSlice.reducer

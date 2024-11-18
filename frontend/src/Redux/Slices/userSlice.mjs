import { createSlice } from "@reduxjs/toolkit";

// Retrieve user data from local storage
const userDataFromLocalStorage = localStorage.getItem(
  process.env.REACT_APP_PROJECT_NAME + "isLoggedIn"
);

// Define the initial state for the user slice
const initialState = {
  isLoggedIn: userDataFromLocalStorage
    ? JSON.parse(userDataFromLocalStorage)
    : false,
};

export const userSlice = createSlice({
  name: "User",
  initialState, // Properly assign the initial state
  reducers: {
    markUserAsLoggedIn: (state, action) => {
      // Update localStorage and state
      localStorage.setItem(
        process.env.REACT_APP_PROJECT_NAME + "isLoggedIn",
        JSON.stringify(true)
      );
      state.isLoggedIn = true;
    },
    markUserAsLoggedOut: (state) => {
      // Clear localStorage and reset state
      localStorage.setItem(
        process.env.REACT_APP_PROJECT_NAME + "isLoggedIn",
        JSON.stringify(false)
      );
      state.isLoggedIn = false;
    },
  },
});

// Exporting actions
export const { markUserAsLoggedIn, markUserAsLoggedOut } = userSlice.actions;

// Exporting reducer
const reducerUserSlice = userSlice.reducer;
export default reducerUserSlice;

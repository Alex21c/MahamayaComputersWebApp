import { createSlice } from "@reduxjs/toolkit";

let defaultInitialState = {
  userData: {
    isUserLoggedIn: false,
  },
};
const userDataFromLocalStorage = localStorage.getItem(
  process.env.REACT_APP_PREFIX_LOCALSTORAGE + "userData"
);

export const userSlice = createSlice({
  name: "user",
  initialState: userDataFromLocalStorage
    ? JSON.parse(userDataFromLocalStorage)
    : defaultInitialState,
  reducers: {
    setUserData: (state, action) => {
      localStorage.setItem(
        process.env.REACT_APP_PROJECT_NAME + "userData",
        JSON.stringify(action.payload || {})
      );
      state.data = action.payload || {};
    },
    clearUserData: (state) => {
      localStorage.removeItem(process.env.REACT_APP_PROJECT_NAME + "userData");
      state.data = {};
    },
  },
});

// exporting actions
export const { setUserData, clearUserData } = userSlice.actions;

// exporting reducers
const reducerUserSlice = userSlice.reducer;
export default reducerUserSlice;

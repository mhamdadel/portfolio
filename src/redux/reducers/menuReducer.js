import { createSlice } from "@reduxjs/toolkit";
import { actions } from "../actions";

const menuItems = {
  "/": { "name": "About Me" },
  "/portfolio": { "name": "Portfolio" },
  "/contact-me": { "name": "Contact Me" },
  "/skills": { "name": "My Skills" },
};

const getCurrentPage = (menuItems) => {
  const path = window.location.pathname;
  
  if (menuItems[path] === undefined) {
    return "/";
  }

  return path;
};

const initialState = {
  currentPage: getCurrentPage(menuItems),
  menuItems
};

const weatherSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.SET_CURRENT_PAGE, (state, action) => {
        state.currentPage = action.payload;
      })
      .addCase(actions.SET_MENU_ITEMS, (state, action) => {
        state.menuItems = action.payload;
      });
  },
});

export default weatherSlice.reducer;

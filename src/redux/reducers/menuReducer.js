import { createSlice } from "@reduxjs/toolkit";
import { actions } from "../actions";
const getCurrentPage = () => {
  const path = window.location.pathname;
  switch (path) {
    case "/":
      return "About Me";
    case "/portfolio":
      return "Portfolio";
    case "/projects":
      return "Projects";
    case "/calendar":
      return "Calendar";
    default:
      return "About Me"; // Default to "About Me" if no match is found
  }
};
const initialState = {
  currentPage: getCurrentPage(),
  menuItems: [
    { name: "About Me", href: "/", current: true },
    { name: "Portfolio", href: "/portfolio", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ],
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

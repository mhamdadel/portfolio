export const actions = {
    SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
    SET_MENU_ITEMS: "SET_MENU_ITEMS",
}

export const setCurrentPage = (currentPage) => {
    return {
      type: actions.SET_CURRENT_PAGE,
      payload: currentPage,
    };
  };

export const setMenuItems = (menuItems) => ({
    type: actions.SET_MENU_ITEMS,
    payload: menuItems
})
  
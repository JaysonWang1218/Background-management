import { createSlice } from "@reduxjs/toolkit";
const tabSlice = createSlice({
  name: "tab",
  initialState: {
    isCollapse: false,
    tabList: [{ path: "/home", name: "home", label: "首页" }],
    currentMenu: {},
  },
  reducers: {
    collapseMenu: (state) => {
      state.isCollapse = !state.isCollapse;
    },
    selectMenuList: (state, { payload: val }) => {
      if (val.name !== "home") {
        state.currentMenu = val;
        const isExist = state.tabList.some((item) => item.name === val.name);
        if (!isExist) {
          state.tabList.push(val);
        }
      } else {
        state.currentMenu = {};
      }
    },
    closeTab: (state, { payload: val }) => {
      const index = state.tabList.findIndex((item) => item.name === val.name);
      state.tabList.splice(index, 1);
    },
  },
});
export const { collapseMenu, selectMenuList, closeTab } = tabSlice.actions;
export default tabSlice.reducer;

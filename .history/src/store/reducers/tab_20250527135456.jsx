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
        //  判断当前菜单是否已存在
        const isExist = state.tabList.some((item) => item.name === val.name);
        if (!isExist) {
          state.tabList.push(val);
        }
      } else {
        state.currentMenu = {};
      }
    },
  },
});
export const { collapseMenu, selectMenuList } = tabSlice.actions;
export default tabSlice.reducer;

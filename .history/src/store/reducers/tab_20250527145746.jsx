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
      } else if (val.name === "home"&&state.tabList.length===1){
        state.currentMenu = {};
      }
    },
    closeTab: (state, { payload: val }) => {
      const result = state.tabList.filter((item) => item.name === val.name);
      state.tabList .splice(result, 1);
    },
  },
});
export const { collapseMenu, selectMenuList, closeTab } = tabSlice.actions;
export default tabSlice.reducer;

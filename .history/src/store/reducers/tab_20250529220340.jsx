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
      } else if (val.name === "home" && state.tabList.length === 1) {
        state.currentMenu = {};
      }
    },
    closeTab: (state, { payload: val }) => {
      // 防止关闭最后一个标签
      if(state.tabList.length <= 1) return;
      
      const index = state.tabList.findIndex((item) => item.name === val.name);
      state.tabList.splice(index, 1);
      
      // 如果关闭的是当前选中标签，自动选中前一个标签
      if(val.name === state.currentMenu.name) {
        state.currentMenu = state.tabList[Math.max(0, index - 1)] || {};
      }
    },
  },
});
export const { collapseMenu, selectMenuList, closeTab } = tabSlice.actions;
export default tabSlice.reducer;
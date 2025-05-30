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
      } else if (val.name === "home" && state.tabList.length === 1) {
        state.currentMenu = {};
      }
    },
    closeTab: (state, { payload: val }) => {
      // 找到要关闭标签的索引
      // const index = state.tabList.findIndex((item) => item.name === val.name);
      // if (index !== -1) {
      //   // 如果找到索引，则从数组中移除该标签
      //   state.tabList.splice(index, 1);
      // }
    },
  },
});
export const { collapseMenu, selectMenuList, closeTab } = tabSlice.actions;
export default tabSlice.reducer;

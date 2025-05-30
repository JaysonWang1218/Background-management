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
        // 若选择的菜单不是首页，则将当前菜单设置为选择的菜单
        state.currentMenu = val;
        //  判断当前菜单是否已存在于标签列表中
        const isExist = state.tabList.some((item) => item.name === val.name);
        if (!isExist) {
          // 若不存在，则将选择的菜单添加到标签列表中
          state.tabList.push(val);
        }
      } else if (val.name === "home" && state.tabList.length === 1) {
        // 若选择的菜单是首页且标签列表中只有一个元素，则清空当前菜单
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

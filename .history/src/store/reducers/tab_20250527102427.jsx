import { createSlice } from "@reduxjs/toolkit";
const tabSlice = createSlice({
  name: "tab",
  initialState: {
    isCollapse: false,
    tabList: [
      { path: "/home", name: "home", label: "首页"},
    ]
  },
  reducers: {
    collapseMenu: (state) => {
      state.isCollapse = !state.isCollapse;
    },
  },
});
export const { collapseMenu } = tabSlice.actions;
export default tabSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import TabReducer from "./reducers/tab.jsx";
export default configureStore({
  reducer: {
    tab: TabReducer,
  },
});

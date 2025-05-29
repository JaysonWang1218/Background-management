import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../pages/main.jsx";
import Home from "../pages/home/index.jsx";
import Mall from "../pages/mall/index.jsx";
import User from "../pages/user/index.jsx";
import PageOne from "../pages/other/pageOne.jsx";
import PageTwo from "../pages/other/pageTwo.jsx";
const routes = [
  {
    path: "/",
    Component: Main,
    children: [
      //重定向
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "mall",
        Component: Mall,
      },
      {
        path: "user",
        Component: User,
      },
      {
        path: "other",
        children: [
          {
            path: "pageOne",
            Component: PageOne,
          },
          {
            path: "pageTwo",
            Component: PageTwo,
          },
        ],
      },
    ],
  },
];
export const router = createBrowserRouter(routes);

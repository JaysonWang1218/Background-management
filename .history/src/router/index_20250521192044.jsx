import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main.jsx";
import Home from "../pages/home/index.jsx";
import Mall from "../pages/mall/index.jsx";
import User from "../pages/user/index.jsx";
const routes = [
    {
        path: "/",
        Component: Main,
        children: [
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

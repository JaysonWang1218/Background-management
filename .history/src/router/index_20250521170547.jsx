import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main.jsx";
import Home from "../pages/home/index.jsx";
const routes = [
    {
        path: "/",
        Component:Main,
        Children:[
            {
                path: "home",
                Component:Home,
            }
        ]
    }
]
export const router = createBrowserRouter(routes);
import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import Home from "../pages/home/home";
import { Children } from "react";
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
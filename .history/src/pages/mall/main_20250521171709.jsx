import React from "react";  
import { Outlet } from "react-router-dom";
const Mall = () => {
    return (
        <div>
            Mall
            <Outlet/>
        </div>
    )
}
export default Mall;
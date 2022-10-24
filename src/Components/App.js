import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";
import Navbar from "./Navbar";



const App = () => {
    return (
        <div>
            <Sidenav/>
            <Navbar/>
            <Outlet />
        </div>
    )
}

export default App

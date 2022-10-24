import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './Components/App'
import Register from "./Components/Register";
import Errorpage from "./Components/Errorpage";
import ForSale from "./Components/ForSale";
import Homepage from "./Components/Homepage";
import Loginpage from "./Components/Loginpage";
import Post from "./Components/Post";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";
import "./styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DetailedPostView from "./Components/Detailedpost";
import EditPost from "./Components/Editpost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "Loginpage",
        element: <Loginpage />,
      },
      {
        path: "Profile",
        element: <Profile />,
          children: [
            {
              path: "Post",
              element: <Post/>,
            },
            {
              path: "/Profile/:id",
              element: <EditPost/>
            }
          ]
      },
      {
        path: "ForSale",
        element: <ForSale />,
      },
      {
        path: "Post",
        element: <Post />,
      },
      {
        path: "Settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("App")
);

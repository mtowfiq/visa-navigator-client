import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../Layouts/Home";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // children: {
    //     [
    //         path: "",
    //         element:
    //     ]
    // }
  },
  {
    path: "/authentication",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/authentication/register",
        element: <Register></Register>,
      },
      {
        path: "/authentication/login",
        element: <Login></Login>,
      },
]
  },
]
);

export default router;
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../Layouts/Home";
import Register from "../Pages/Register";

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
    path: "/register",
    element: <Register></Register>
  },
]
);

export default router;
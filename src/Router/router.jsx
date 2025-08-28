import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../Layouts/Home";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Homepage from "../Pages/Homepage";
import AddVisa from "../Pages/AddVisa";
import PrivateRoute from "./PrivateRoute";
import AllVisas from "../Pages/AllVisas";
import VisaDetails from "../Pages/VisaDetails";
import MyAddedVisas from "../Pages/MyAddedVisas";
import MyVisaApplications from "../Pages/MyVisaApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
        {
            path: "/",
            element: <Homepage></Homepage>
        },
        {
          path: "/addvisa",
          element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>
        },
        {
            path: "/allvisas",
            element: <AllVisas></AllVisas>,
            loader: () => fetch("http://localhost:5000/visas")
        },
        {
            path: "/visa/:id",
            element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/visa/${params.id}`)
        },
        {
            path: "/my-added-visas",
            element: <PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
            // loader: ({params}) => fetch(`http://localhost:5000/my-added-visa`)
        },
        {
            path: "/my-visa-applications",
            element: <PrivateRoute><MyVisaApplications></MyVisaApplications></PrivateRoute>,
            // loader: ({params}) => fetch(`http://localhost:5000/visa/${params.id}`)
        },
      ]
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
  {
    path: "*",
    element: <h2>Error</h2>
  }
]
);

export default router;
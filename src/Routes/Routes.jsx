import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import AddClasses from "../pages/Dashboard/Instructor/AddClasses";
import MyClass from "../pages/Dashboard/Instructor/MyClass";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path: "addClasses",
        element: <AddClasses></AddClasses>,
      },
      {
        path: "myClasses",
        element: <MyClass></MyClass>,
      },
      {
        path: "ManageClasses",
        element: <ManageClasses></ManageClasses>,
      },

    ]
  },
]);

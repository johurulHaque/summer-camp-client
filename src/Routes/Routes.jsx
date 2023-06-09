import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import AddClasses from "../pages/Dashboard/Instructor/AddClasses";
import MyClass from "../pages/Dashboard/Instructor/MyClass";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import FeedBack from "../pages/Dashboard/Admin/FeedBack";
import ManageUser from "../pages/Dashboard/Admin/ManageUser";
import InstructorPage from "../pages/InstructorPage/InstructorPage";
import ClassPage from "../pages/ClassPage/ClassPage";
import SelectedClass from "../pages/Dashboard/User/SelectedClass";

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
      {
        path: "instructor",
        element: <InstructorPage></InstructorPage>,
      },
      {
        path: "classPage",
        element: <ClassPage></ClassPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      // user 
      {
        path: "selectClass",
        element: <SelectedClass></SelectedClass>,
      },
      // instructor 
      {
        path: "addClasses",
        element: <AddClasses></AddClasses>,
      },
      
      {
        path: "myClasses",
        element: <MyClass></MyClass>,
      },
      // admin
      {
        path: "ManageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "feedback/:id",
        element: <FeedBack></FeedBack>,
      },
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },

    ]
  },
]);

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: 'about',
        element: <About></About>,
      },
    ],
  },
  {
    path: '/admin',
    element: <App></App>,
        children: adminPaths
    },
  {
    path: '/faculty',
    element: <App></App>,
        children: adminPaths
    },
  {
    path: '/student',
    element: <App></App>,
        children: adminPaths
    },
  //   {
  //     path: '/admin',
  //     element:<AdminLayout></AdminLayout> ,
  //     children: [
  //       {
  //         index: true, // /admin e hit korle  e oi dashboard pabp
  //         element: <AdminDashboard></AdminDashboard>,
  //       },
  //       {
  //         path: 'dashboard', // /admin e hit korle  e oi dashboard pabp
  //         element: <AdminDashboard></AdminDashboard>,
  //       },
  //     ],
  //   },
  {
    path: 'login',
    element: <Login></Login>,
  },
  {
    path: 'register',
    element: <Register></Register>,
  },
]);

export default router;
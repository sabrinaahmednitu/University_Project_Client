import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
// import { adminRoutes } from "./admin.routes";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/admin',
    element: <App></App>,
    children: routesGenerator(adminPaths),
  },
  {
    path: '/faculty',
    element: <App></App>,
    children: routesGenerator(facultyPaths),
  },
  {
    path: '/student',
    element: <App></App>,
    children: routesGenerator(studentPaths),
  },
  //   {

  //website 2 ta mone hobe tobe single application e

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
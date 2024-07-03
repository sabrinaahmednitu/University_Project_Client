import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';

export const adminPaths2 = [
  {
    name: 'Dashboard',
    path: 'dashboard', // /admin e hit korle  e oi dashboard pabp
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: '/admin/create-admin',
        label: <CreateAdmin></CreateAdmin>,
      },
      {
        name: 'Create Faculty',
        path: '/admin/create-faculty',
        label: <CreateFaculty></CreateFaculty>,
      },
      {
        name: 'Create Student',
        path: '/admin/create-student',
        label: <CreateStudent></CreateStudent>,
      },
    ],
  },
  
];

export const adminPaths = [
  {
    path: 'dashboard', // /admin e hit korle  e oi dashboard pabp
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: 'create-student', 
    element: <CreateStudent></CreateStudent>,
  },
  {
    path: 'create-admin', 
    element: <CreateAdmin></CreateAdmin>,
  },
  {
    path: 'create-faculty', 
    element: <CreateFaculty></CreateFaculty>,
  },
];

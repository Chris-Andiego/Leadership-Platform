import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Upload from './Components/Upload';
import Projects from './Components/Projects';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Reviews from './Components/Reviews';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
  },
  {
    path: "/Upload",
    element: <Upload/>,
  },
  {
    path: "/Projects",
    element: <Projects/>,
  },
  {
    path: "/Signup",
    element: <SignUp/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/reviews",
    element: <Reviews/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


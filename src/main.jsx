import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import AddProduct from './pages/AddProduct/AddProduct';
import MyCart from './pages/MyCart/MyCart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [

      {
          path: "/",
          element: <Home></Home>,
      },
      {
          path: "/product",
          element: <AddProduct></AddProduct>,
      },
      {
          path: "/cart",
          element:<MyCart></MyCart>,
          
      },
      {
          path: "/login",
          element:<Login></Login>,
         
      },
      {
          path: "/register",
          element:<Register></Register>,
         
      },
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

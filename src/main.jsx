import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './layout/MainLayout';
import AddProduct from './components/AddProduct/AddProduct';
import MyCart from './components/MyCart/MyCart';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [

      {
          path: "/product",
          element: <AddProduct></AddProduct>,
      },
      {
          path: "/cart",
          element: <MyCart></MyCart>,
          
      }
      ,
      {
          path: "/login",
          element: <Login></Login>,
         
      }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

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
import AuthProvider from './provider/AuthProvider';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import BrandProducts from './pages/BrandProducts/BrandProducts';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [

      {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:5000/brand'),
      },
      {
          path: "/product",
          element: <ProtectedRoutes><AddProduct></AddProduct></ProtectedRoutes>,
      },
      {
          path: "/products/:brandName",
          element: <BrandProducts></BrandProducts>,
      },
      {
        path:"/detail/:id",
        element:<ProductDetail></ProductDetail>,
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
 <AuthProvider>
      <RouterProvider router={router} />  
    </AuthProvider>
   
  </React.StrictMode>,
)


   

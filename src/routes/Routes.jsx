import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import ProductCollection from "../pages/ProductCollection/ProductCollection";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Favorites from "../pages/Favorites/Favorites";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Profile from "../layout/Profile";
import MyAccount from "../pages/Profile/MyAccount/MyAccount";
import MyOrders from "../pages/Profile/MyOrders/MyOrders";
import MyTransaction from "../pages/Profile/MyTransaction/MyTransaction";
import SalesOverview from "../pages/AdminDashboard/SalesOverview/SalesOverview";
import OrderManage from "../pages/AdminDashboard/OrderManage/OrderManage";
import ProductManage from "../pages/AdminDashboard/ProductManage/ProductManage";
import AddProduct from "../pages/AdminDashboard/ProductManage/AddProduct";
import ManageUsers from "../pages/AdminDashboard/ManageUsers/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/collection",
        element: <ProductCollection />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
  {
    path: "/profile/:id",
    element: <Profile />,
    children: [
      // User Route

      {
        path: "/profile/:id",
        element: <MyAccount />,
      },
      {
        path: "/profile/:id/wishlist",
        element: <Favorites />,
      },
      {
        path: "/profile/:id/orders",
        element: <MyOrders />,
      },

      // Admin Route

      {
        path: "/profile/:id/admin/sales-overview",
        element: <SalesOverview />,
      },
      {
        path: "/profile/:id/admin/orders-manage",
        element: <OrderManage />,
      },
      {
        path: "/profile/:id/admin/product-manage",
        element: <ProductManage />,
      },
      {
        path: "/profile/:id/admin/add-product",
        element: <AddProduct />,
      },
      {
        path: "/profile/:id/admin/manage-users",
        element: <ManageUsers />,
      },
    ],
  },
]);

export default router;

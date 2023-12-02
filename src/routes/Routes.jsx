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
    ],
  },
]);

export default router;

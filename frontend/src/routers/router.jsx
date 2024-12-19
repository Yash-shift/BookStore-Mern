import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

import Login from "../components/Login"

import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";

import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/orders",
        element: <div>Orders</div>,
      },
      {
        path: "/about",
        element: <h1>About Page</h1>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
        
      },
      {path:"/cart",
        element:<CartPage/>
      }
      ,{
        path: "/checkout",
        element:<CheckoutPage/>
      }
      ,
      {
        path:"/books/:id",
        element:<SingleBook></SingleBook>
      }

    ],
  },
]);

export default router;

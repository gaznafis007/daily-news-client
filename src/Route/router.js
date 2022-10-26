import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import UserEntry from "../layout/UserEntry/UserEntry";
import AllNews from "../Pages/AllNews/AllNews";
import Category from "../Pages/Categories/Category/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import PrivateRoute from "../Pages/Private/PrivateRoute";
import Login from "../Pages/User/Login/Login";
import Register from "../Pages/User/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/news",
        element: <AllNews></AllNews>,
        loader: () => fetch("https://daily-news-server-zeta.vercel.app/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://daily-news-server-zeta.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://daily-news-server-zeta.vercel.app/news/${params.id}`),
      },
    ],
  },
  {
    path: "/userAuth",
    element: <UserEntry></UserEntry>,
    children: [
      {
        path: "/userAuth/register",
        element: <Register></Register>,
      },
      {
        path: "/userAuth/login",
        element: <Login></Login>,
      },
    ],
  },
]);

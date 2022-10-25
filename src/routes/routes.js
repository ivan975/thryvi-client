import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import Details from "../components/Details/Details";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`),
                element: <Details />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            }
        ]
    }
]);
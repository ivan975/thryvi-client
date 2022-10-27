import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import Details from "../components/Details/Details";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Premium from "../components/Premium/Premium";
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
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-ivan975.vercel.app/details/${params.id}`),
                element: <Details />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/blogs',
                element: <Blog />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/premium/:id',
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-ivan975.vercel.app/premium/${params.id}`),
                element: <PrivateRoute><Premium /></PrivateRoute>
            }
        ]
    }
]);
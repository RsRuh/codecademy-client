import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import LogIn from '../../LogPage/LogIn';
import Register from '../../LogPage/Register';
import Blog from '../../pages/Blog';
import CheckOut from '../../pages/CheckOut';
import Courses from '../../pages/Courses';
import Error from '../../pages/Error';
import FAQ from '../../pages/FAQ';
import Home from '../../pages/Home';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Details from '../../share/Details'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://codecademy-server.vercel.app/courses')
            },
            {
                path: '/login', element: <LogIn></LogIn>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/faq', element: <FAQ></FAQ>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://codecademy-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://codecademy-server.vercel.app/courses/${params.id}`)
            }
        ]
    },
    {
        path: '*', element: <Error></Error>
    }
])

export default router;
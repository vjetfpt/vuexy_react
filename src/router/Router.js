// ** Router imports
import {lazy} from 'react'

// ** Router imports
import {Navigate, useRoutes} from 'react-router-dom'

// ** Layouts
import BlankLayout from '@layouts/BlankLayout'

// ** Utils
import {getHomeRouteForLoggedInUser, getUserData} from '../utility/Utils'

// ** Components
const Error = lazy(() => import('../views/pages/misc/Error'))
const Login = lazy(() => import('../views/pages/authentication/Login'))
const NotAuthorized = lazy(() => import('../views/pages/misc/NotAuthorized'))

const Router = ({ allRoutes }) => {
    const getHomeRoute = () => {
        const user = getUserData()
        if (user) {
            return getHomeRouteForLoggedInUser(user.role)
        } else {
            return '/login'
        }
    }

    return useRoutes([
        {
            path: '/',
            index: true,
            element: <Navigate replace to={getHomeRoute()}/>
        },
        {
            path: '/login',
            element: <BlankLayout/>,
            children: [{path: '/login', element: <Login/>}]
        },
        {
            path: '/auth/not-auth',
            element: <BlankLayout/>,
            children: [{path: '/auth/not-auth', element: <NotAuthorized/>}]
        },
        {
            path: '*',
            element: <BlankLayout/>,
            children: [{path: '*', element: <Error/>}]
        },
        ...allRoutes
    ])
}

export default Router
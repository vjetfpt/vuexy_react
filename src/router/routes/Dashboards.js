import {lazy} from 'react'

const DashboardEcommerce = lazy(() => import('../../views/dashboard/Home'))
const SecondPage = lazy(() => import('../../views/dashboard/SecondPage'))

const DashboardRoutes = [
    {
        path: '/dashboard/ecommerce',
        element: <DashboardEcommerce/>
    },
    {
        path: '/second-page',
        element: <SecondPage/>
    }
]

export default DashboardRoutes

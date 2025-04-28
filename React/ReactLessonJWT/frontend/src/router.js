import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import HomePage from './pages/home-page'
import UsersPage from './pages/users-page'
import AboutPage from './pages/about-page'
import LoginPage from './pages/login-page'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'about', element: <AboutPage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'login', element: <LoginPage/>},
        ]
    }
])
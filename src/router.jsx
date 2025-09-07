import {createBrowserRouter} from "react-router-dom";

import RootRedirect from "./routes/RootRedirect";
import ProtectedRoute from "./routes/ProtectedRoute";

import Dashboard from "./routes/Dashboard";
import Login, { action as loginAction } from "./routes/Login";
import Signup from './routes/Signup'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRedirect />   
    }, {
        path: '/signin',
        element: <Login />,
        action: loginAction
    }, {
        path: '/signup',
        element: <Signup />
    }, {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        )
    }
])
import {createBrowserRouter} from "react-router-dom";

import Dashboard from "./routes/Dashboard";
import Login, { action as loginAction, loader as loginLoader } from "./routes/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        action: loginAction,
        loader: loginLoader
    }, {
        path: '/dashboard',
        element: <Dashboard />
    }
])
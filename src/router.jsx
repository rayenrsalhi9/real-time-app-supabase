import {createBrowserRouter} from "react-router-dom";

import Dashboard from "./routes/Dashboard";
import Login, { action as loginAction } from "./routes/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        action: loginAction
    }, {
        path: '/dashboard',
        element: <Dashboard />
    }
])
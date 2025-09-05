import {createBrowserRouter} from "react-router-dom";

import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    }, {
        path: '/dashboard',
        element: <Dashboard />
    }
])
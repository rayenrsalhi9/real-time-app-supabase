import { router } from "./router"
import { AuthContextProvider } from "./context/AuthContext"
import { RouterProvider } from "react-router-dom"

export default function App() {
  return (
    <div className="container">
      <AuthContextProvider>
        <RouterProvider router={router}/>
      </AuthContextProvider>
    </div>
  )
}

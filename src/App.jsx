import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import Form from "./components/Form"

export default function App() {
  return (
    <div className="container">
      <Header />
      <div className="content-wrapper">
        <Dashboard />
        <Form />
      </div>
    </div>
  )
}

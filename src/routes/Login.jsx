import { Form, Link } from "react-router-dom"

export default function Login() {
  return (
    <>
      <header className='login-header'>
        <h1>Paper like a boss</h1>
      </header>
      <Form className="auth-form">
        <div className="form-content">
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="example@domain.com" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="********" />
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Login
        </button>
        <p className="signup-cta">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </Form>
    </>
  )
}

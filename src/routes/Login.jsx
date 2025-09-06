/* eslint-disable react-refresh/only-export-components */
import { Form, Link } from "react-router-dom"

export async function action({request}) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  console.log('Data submitted')
  console.log(email)
  console.log(password)
}

export default function Login() {
  return (
    <>
      <header className='login-header'>
        <h1>Paper like a boss</h1>
      </header>
      <Form className="auth-form" method="post">
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

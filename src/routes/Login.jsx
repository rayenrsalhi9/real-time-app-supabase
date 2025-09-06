/* eslint-disable react-refresh/only-export-components */
import { Form, Link, useNavigation } from "react-router-dom"

export async function action({request}) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  console.log('Data submitted')
  console.log(email)
  console.log(password)
}

export default function Login() {

  const {state} = useNavigation()

  return (
    <>
      <header className='login-header'>
        <h1>Paper like a boss</h1>
      </header>
      <Form className="auth-form" method="post" replace>
        <div className="form-content">
          <h2>Sign in</h2>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="example@domain.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="********" required />
          </div>
        </div>
        <button className="submit-btn" type="submit" disabled={state === 'submitting'}>
          { state === 'submitting' ? "Signing in..." : "Sign in" }
        </button>
        <p className="signup-cta">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </Form>
    </>
  )
}

/* eslint-disable react-refresh/only-export-components */
import { 
  Form, 
  Link, 
  useNavigation, 
  useActionData, 
  useLoaderData 
} from "react-router-dom"
import { signInUser } from "../utils"

export async function action({request}) {
  const formData = await request.formData()
  // 1. extract form data
  const email = formData.get('email')
  const password = formData.get('password')
  
  // 2. call the sign in function directly
  return signInUser(email, password)
}

export async function loader({request}) {
  const url = new URL(request.url)
  const message = url.searchParams.get('message')
  return message
}

export default function Login() {

  const {state} = useNavigation()
  const error = useActionData()
  const message = useLoaderData()

  return (
    <>
      <header className='login-header'>
        <h1>Paper like a boss</h1>
      </header>
      <Form className="auth-form" method="post" replace>
        <div className="form-content">
          <h2>Sign in</h2>
          {
            error 
            ? <p className="auth-error-msg">{error}</p>
            : message 
            ? <p className="auth-msg">{message}</p>
            : null
              
          }
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className={error ? 'error' : ''} placeholder="example@domain.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className={error ? 'error' : ''} placeholder="********" required />
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

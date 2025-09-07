import { 
  Form, 
  Link, 
  useNavigation, 
  useActionData, 
} from "react-router-dom"
import { signUpUser } from "../utils"

export async function action({request}) {
  const formData = await request.formData()
  // 1. extract form data
  const email = formData.get('email')
  const password = formData.get('password')
  
  return signUpUser(email, password)
}

export default function Login() {

  const {state} = useNavigation()
  const error = useActionData()

  return (
    <>
      <header className='login-header'>
        <h1>Paper like a boss</h1>
      </header>
      <Form className="auth-form" method="post" replace>
        <div className="form-content">
          <h2>Create an account</h2>
          {error ? <p className="auth-error-msg">{error}</p> : null}
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
          { state === 'submitting' ? "Signing up..." : "Sign up" }
        </button>
        <p className="signup-cta">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </Form>
    </>
  )
}
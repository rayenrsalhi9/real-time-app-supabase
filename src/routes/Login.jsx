/* eslint-disable react-refresh/only-export-components */
import { Form, Link, redirect, useNavigation, useActionData } from "react-router-dom"
import supabase from "../supabase-client"

export async function action({request}) {
  const formData = await request.formData()
  // 1. extract form data
  const email = formData.get('email')
  const password = formData.get('password')
  
  // 2. call the sign in function directly
  try {
    const {data, error} = await supabase.auth
      .signInWithPassword({email: email.toLowerCase(), password})
    
    // 3. handle known errors
    if (error) {
      console.log('An error occurred when signing in: ', error.message)
      return error.message
    }
    // 4. handle success
    if (data?.session) {
      console.log('Login success', data)
      return redirect('/dashboard')
    }
    
  } catch(err) {
    console.log(`Unexpected error when authenticating: ${err.message}`)
    return 'Unexpected error when authenticating'
  }
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
          <h2>Sign in</h2>
          {error ? <p className="auth-error-msg">{error}</p> : null}
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

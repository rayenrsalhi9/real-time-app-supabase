import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {LogOut} from 'lucide-react'
import { signOutUser } from '../utils'
import {useAuth} from '../context/AuthContext'

export default function Header() {
  
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const {session} = useAuth()

  async function handleClick() {
    setError(null)
    try {
      const err = await signOutUser()
      if (err) {
        setError(err)
      } else {
        navigate('/signin')
      }
    } catch (error) {
      console.log('Error signing out:', error)
    }
  }

  return (
    <header className='dashboard-header'>
        <h1>Sales Team Dashboard</h1>
        {
          session ?
          (<>
            <div className="dashboard-header-lower-section">
              <p>{session?.user?.email}</p>
              <button className='signout-btn' onClick={handleClick}>
                <LogOut />
                Sign out
              </button>
            </div>
            {error ? <p className='error-msg'>{error}</p> : null}
          </>) : 
          null
        }
    </header>
  )
}

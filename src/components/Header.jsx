import { useNavigate } from 'react-router-dom'
import {LogOut} from 'lucide-react'
import { signOutUser } from '../utils'
import {useAuth} from '../context/AuthContext'

export default function Header() {
  
  const navigate = useNavigate()
  const {session} = useAuth()

  async function handleClick() {
    try {
      await signOutUser()
      navigate('/')
    } catch (error) {
      console.log('Error signing out:', error)
    }
  }

  return (
    <header className='dashboard-header'>
        <h1>Sales Team Dashboard</h1>
        {
          session ?
          <div className="dashboard-header-lower-section">
            <p>{session?.user?.email}</p>
            <button className='signout-btn' onClick={handleClick}>
              <LogOut />
              Sign out
            </button>
          </div> : 
          null
        }
    </header>
  )
}

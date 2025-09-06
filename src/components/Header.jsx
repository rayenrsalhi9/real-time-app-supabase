import { useNavigate } from 'react-router-dom'
import {LogOut} from 'lucide-react'
import { signOutUser } from '../utils'

export default function Header() {
  
  const navigate = useNavigate()

  async function handleClick() {
    try {
      await signOutUser()
      navigate('/?message=Successfully signed out')
    } catch (error) {
      console.log('Error signing out:', error)
    }
  }

  return (
    <header className='dashboard-header'>
        <h1>Sales Team Dashboard</h1>
        <button className='signout-btn' onClick={handleClick}>
          <LogOut />
          Sign out
        </button>
    </header>
  )
}

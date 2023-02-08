import { FC } from 'react'
import { useNavigate } from 'react-router'
import { signInStore } from './../../store'
import { signInUser } from './../../signInUser'
import { Button } from 'standard-ui'
import { authStore } from '@app/auth'
import styles from './SignInButton.module.css'

interface SignInButtonProps {}

export const SignInButton: FC<SignInButtonProps> = () => {
  const { login, password, setLogin, setPassword } = signInStore()
  const updateUser = authStore((store) => store.updateUser)
  const navigate = useNavigate()
  
  async function signInHandler() {
    if (!login.length || !password.length) return
    
    const user = await signInUser({ login, password })
    updateUser(user)
    clearForm()
    navigateHomePage()
  }

  function clearForm() {
    setLogin('')
    setPassword('')
  }

  function navigateHomePage() {
    navigate('/')
  }

  return (
    <Button
      onClick={signInHandler}
      className={styles.SignInButton}
    >
      Sign in
    </Button>
  )
}
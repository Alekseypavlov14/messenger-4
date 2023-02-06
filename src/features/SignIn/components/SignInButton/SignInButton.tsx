import { FC } from 'react'
import { useNavigate } from 'react-router'
import { signInStore } from './../../store'
import { signInUser } from './../../signInUser'
import { Button } from 'standard-ui'
import styles from './SignInButton.module.css'

interface SignInButtonProps {}

export const SignInButton: FC<SignInButtonProps> = () => {
  const { login, password, setLogin, setPassword } = signInStore()
  const navigate = useNavigate()
  
  function signInHandler() {
    signIn()
    clearForm()
    navigateHomePage()
  }

  function signIn() {
    if (!login.length || !password.length) return
    signInUser({ login, password })
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
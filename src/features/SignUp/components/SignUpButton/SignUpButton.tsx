import { FC } from 'react'
import { useNavigate } from 'react-router'
import { signUpStore } from './../../store'
import { signUpUser } from './../../signUpUser'
import { Button } from 'standard-ui'
import styles from './SignUpButton.module.css'

interface SignUpButtonProps {}

export const SignUpButton: FC<SignUpButtonProps> = () => {
  const { login, password, setLogin, setPassword } = signUpStore()
  const navigate = useNavigate()
  
  function signUpHandler() {
    if (!login.length || !password.length) return

    signUpUser({ login, password })
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
      onClick={signUpHandler}
      className={styles.SignUpButton}
    >
      Sign Up
    </Button>
  )
}
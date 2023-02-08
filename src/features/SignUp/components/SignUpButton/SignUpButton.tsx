import { FC } from 'react'
import { createUserInDatabase } from '@entities/users'
import { useNavigate } from 'react-router-dom'
import { signUpStore } from './../../store'
import { Button } from 'standard-ui'
import styles from './SignUpButton.module.css'

interface SignUpButtonProps {}

export const SignUpButton: FC<SignUpButtonProps> = () => {
  const { login, password, setLogin, setPassword } = signUpStore()
  const navigate = useNavigate()
  
  function signUpHandler() {
    if (!login.length || !password.length) return

    createUserInDatabase({ login, password })
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
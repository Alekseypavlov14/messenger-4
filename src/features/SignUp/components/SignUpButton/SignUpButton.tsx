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
    createUser()
    clearForm()
    navigateHomePage()
  }

  function createUser() {
    if (!login.length || !password.length) return
    signUpUser({ login, password })
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
      className={styles.Button}
    >
      Sign Up
    </Button>
  )
}
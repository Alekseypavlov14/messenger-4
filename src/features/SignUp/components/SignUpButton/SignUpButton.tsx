import { FC } from 'react'
import { useNavigation } from '@app/navigation'
import { signUpStore } from './../../store'
import { useSignUp } from '@features/SignUp/hooks/useSignUp'
import { Button } from 'standard-ui'
import styles from './SignUpButton.module.css'

interface SignUpButtonProps {}

export const SignUpButton: FC<SignUpButtonProps> = () => {
  const { login, password, setLogin, setPassword } = signUpStore()
  const { navigateHomePage } = useNavigation()
  const signUp = useSignUp()
  
  async function signUpHandler() {
    await signUp({ login, password })
    navigateHomePage()
    clearForm()
  }
  
  function clearForm() {
    setLogin('')
    setPassword('')
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
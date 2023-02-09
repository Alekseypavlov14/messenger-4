import { FC } from 'react'
import { createUserInDatabase } from '@entities/users'
import { useNavigation } from '@app/navigation'
import { signUpStore } from './../../store'
import { authStore } from '@app/auth'
import { Button } from 'standard-ui'
import styles from './SignUpButton.module.css'

interface SignUpButtonProps {}

export const SignUpButton: FC<SignUpButtonProps> = () => {
  const { login, password, setLogin, setPassword } = signUpStore()
  const updateUser = authStore((store) => store.updateUser)
  const { navigateHomePage } = useNavigation()
  
  async function signUpHandler() {
    if (!login.length || !password.length) return

    const user = await createUserInDatabase({ login, password }).catch(e => console.log(e)) || null
    updateUser(user)
    
    clearForm()
    navigateHomePage()
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
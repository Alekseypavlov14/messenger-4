import { FC } from 'react'
import { useNavigation } from '@app/navigation'
import { signInStore } from './../../store'
import { findOneUser } from '@entities/users'
import { authStore } from '@app/auth'
import { Button } from 'standard-ui'
import styles from './SignInButton.module.css'

interface SignInButtonProps {}

export const SignInButton: FC<SignInButtonProps> = () => {
  const { login, password, setLogin, setPassword } = signInStore()
  const updateUser = authStore((store) => store.updateUser)
  const { navigateHomePage } = useNavigation()
  
  async function signInHandler() {
    if (!login.length || !password.length) return
    
    const user = await findOneUser({ login, password })
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
      onClick={signInHandler}
      className={styles.SignInButton}
    >
      Sign in
    </Button>
  )
}
import { useNavigation } from '@app/navigation'
import { signInStore } from './../../store'
import { useSignIn } from '@features/SignIn/hooks/useSignIn'
import { Button } from 'standard-ui'
import { FC } from 'react'
import styles from './SignInButton.module.css'

interface SignInButtonProps {}

export const SignInButton: FC<SignInButtonProps> = () => {
  const { login, password, setLogin, setPassword } = signInStore()
  const { navigateHomePage } = useNavigation()
  const signIn = useSignIn()
  
  async function signInHandler() {
    await signIn({ login, password })
    navigateHomePage()
    clearForm()
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
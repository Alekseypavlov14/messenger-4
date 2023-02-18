import { useSignIn } from './../../hooks/useSignIn'
import { Button } from 'standard-ui'
import { FC } from 'react'
import styles from './SignInButton.module.css'

interface SignInButtonProps {}

export const SignInButton: FC<SignInButtonProps> = () => {
  const signIn = useSignIn()

  return (
    <Button
      onClick={signIn}
      className={styles.SignInButton}
    >
      Sign in
    </Button>
  )
}
import { useSignUp } from './../../hooks/useSignUp'
import { Button } from 'standard-ui'
import { FC } from 'react'
import styles from './SignUpButton.module.css'

interface SignUpButtonProps {}

export const SignUpButton: FC<SignUpButtonProps> = () => {
  const signUp = useSignUp()

  return (
    <Button 
      onClick={signUp}
      className={styles.SignUpButton}
    >
      Sign Up
    </Button>
  )
}
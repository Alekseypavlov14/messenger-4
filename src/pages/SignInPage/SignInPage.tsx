import { SignInForm } from '@features/SignIn'
import { FC } from 'react'
import styles from './SignInPage.module.css'

interface SignInPageProps {}

export const SignInPage: FC<SignInPageProps> = () => {
  return (
    <div className={styles.SignInPage}>
      <SignInForm />
    </div>
  )
}
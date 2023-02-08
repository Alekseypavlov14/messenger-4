import { FC } from 'react'
import { SignInForm } from '@features/SignIn'
import { SignUpLink } from '@features/SignUp'
import styles from './SignInPage.module.css'

interface SignInPageProps {}

export const SignInPage: FC<SignInPageProps> = () => {
  return (
    <div className={styles.SignInPage}>
      <div className={styles.SignInContent}>
        <SignInForm />
        <SignUpLink />
      </div>
    </div>
  )
}
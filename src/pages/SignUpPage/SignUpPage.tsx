import { FC } from 'react'
import { SignInLink } from '@features/SignIn'
import { SignUpForm } from '@features/SignUp'
import styles from './SignUpPage.module.css'

interface SignUpPageProps {}

export const SignUpPage: FC<SignUpPageProps> = () => {
  return (
    <div className={styles.SignUpPage}>
      <div className={styles.SignUpContent}>
        <SignUpForm />
        <SignInLink />
      </div>
    </div>
  )
}
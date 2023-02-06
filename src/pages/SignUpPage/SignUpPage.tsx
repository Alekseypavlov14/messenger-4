import { SignUpForm } from '@features/SignUp'
import { FC } from 'react'
import styles from './SignUpPage.module.css'

interface SignUpPageProps {}

export const SignUpPage: FC<SignUpPageProps> = () => {
  return (
    <div className={styles.SignUpPage}>
      <SignUpForm />
    </div>
  )
}
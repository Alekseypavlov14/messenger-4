import { ChangeEvent, FC } from 'react'
import { SignUpButton } from '../SignUpButton/SignUpButton'
import { signUpStore } from './../../store'
import { Input } from 'standard-ui'
import styles from './SignUpForm.module.css'

interface SignUpFormProps {}

export const SignUpForm: FC<SignUpFormProps> = () => {
  const { login, password, setLogin, setPassword } = signUpStore()

  const updateLogin = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)
  const updatePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  return (
    <div className={styles.SignUpForm}>
      <div className={styles.Title}>Create Account</div>

      <Input 
        placeholder='Login...'
        className={styles.Input}
        onChange={updateLogin}
        value={login}
      />

      <Input 
        type='password'
        placeholder='Password...'
        className={styles.Input}
        onChange={updatePassword}
        value={password}
      />

      <SignUpButton />
    </div>
  )
}
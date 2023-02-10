import { ChangeEvent, FC } from 'react'
import { SignInButton } from '../SignInButton/SignInButton'
import { signInStore } from './../../store'
import { Input } from 'standard-ui'
import styles from './SignInForm.module.css'

interface SignInFormProps {}

export const SignInForm: FC<SignInFormProps> = () => {
  const { login, password, setLogin, setPassword } = signInStore()

  const updateLogin = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value.trim())
  const updatePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value.trim()) 
  
  return (
    <div className={styles.SignInForm}>
      <div className={styles.Title}>Enter your account</div>

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

      <SignInButton />
    </div>
  )
}
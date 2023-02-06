import { ChangeEvent, FC, useState } from 'react'
import { Button, Input } from 'standard-ui'
import { signUpUser } from '@features/SignUp/signUpUser'
import styles from './SignUpForm.module.css'

interface SignUpFormProps {}

export const SignUpForm: FC<SignUpFormProps> = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const updateLogin = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)
  const updatePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  const createUser = () => {
    if (!login.length || !password.length) return
    signUpUser({ login, password })
  }

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

      <Button 
        onClick={createUser}
        className={styles.Button}
      >
        Sign Up
      </Button>
    </div>
  )
}
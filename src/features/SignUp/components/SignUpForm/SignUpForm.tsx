import { createUserInDatabase, UserEntity } from '@entities/users'
import { ChangeEvent, FC, useState } from 'react'
import { Button, Input } from 'standard-ui'
import { generateId } from '@shared/utils/generateId'
import styles from './SignUpForm.module.css'

interface SignUpFormProps {}

export const SignUpForm: FC<SignUpFormProps> = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const updateLogin = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)
  const updatePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  const createUser = () => {
    if (!login || !password) return
    const newUserId = generateId()
    const newUser: UserEntity = { login, password, id: newUserId }
    createUserInDatabase(newUser)
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
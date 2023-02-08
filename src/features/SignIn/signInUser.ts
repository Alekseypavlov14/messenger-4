import { findOneUser } from '@entities/users'
import { SignInData } from './types/SingInData'

export async function signInUser(userData: SignInData) {
  const user = await findOneUser(userData)
  if (!user) return null
  return user
}
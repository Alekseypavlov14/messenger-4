import { SignInStorage } from './storage';
import { findOneUser } from '@entities/users/api/findOne'
import { SignInData } from './types/SingInData'

export async function signInUser(userData: SignInData) {
  const user = await findOneUser(userData)
  if (!user) return

  SignInStorage.setValue(user)
}
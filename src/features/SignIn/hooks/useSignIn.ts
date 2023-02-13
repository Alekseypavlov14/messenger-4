import { findUserByData, UserData, isUserDataValid } from '@entities/users'
import { authStore } from '@app/auth'

export function useSignIn() {
  const updateUser = authStore((store) => store.updateUser)

  return async (userData: UserData) => {
    if (!isUserDataValid(userData)) return
    
    const user = await findUserByData(userData)
    updateUser(user)
  }
}

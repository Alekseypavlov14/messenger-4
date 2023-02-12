import { findUserByData, UserData } from '@entities/users'
import { isUserDataValid } from '@shared/utils/isUserDataValid'
import { authStore } from '@app/auth'

export function useSignIn() {
  const updateUser = authStore((store) => store.updateUser)

  return async (userData: UserData) => {
    if (!isUserDataValid(userData)) return
    
    const user = await findUserByData(userData)
    updateUser(user)
  }
}

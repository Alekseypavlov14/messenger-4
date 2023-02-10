import { authStore } from '@app/auth'
import { findOneUser, UserData } from '@entities/users'
import { isUserDataValid } from '@shared/utils/isUserDataValid'

export function useSignIn() {
  const updateUser = authStore((store) => store.updateUser)

  return async (userData: UserData) => {
    if (!isUserDataValid(userData)) return
    
    const user = await findOneUser(userData)
    updateUser(user)
  }
}

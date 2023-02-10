import { authStore } from "@app/auth"
import { createUserInDatabase, UserData } from "@entities/users"
import { isUserDataValid } from "@shared/utils/isUserDataValid"

export function useSignUp() {
  const updateUser = authStore((store) => store.updateUser)

  return async (userData: UserData) => {
    if (!isUserDataValid(userData)) return
  
    const user = await createUserInDatabase(userData).catch(e => console.log(e)) || null
    updateUser(user)
  }
}
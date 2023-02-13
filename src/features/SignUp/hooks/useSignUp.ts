import { createUserInDatabase, UserData, isUserDataValid } from "@entities/users"
import { authStore } from "@app/auth"

export function useSignUp() {
  const updateUser = authStore((store) => store.updateUser)

  return async (userData: UserData) => {
    if (!isUserDataValid(userData)) return
  
    const user = await createUserInDatabase(userData).catch(e => console.log(e)) || null
    updateUser(user)
  }
}
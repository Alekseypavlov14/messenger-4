import { readUsersFromDatabase } from "@entities/users"
import { searchUsersStore } from "../store"
import { authStore } from '@app/auth'

export function useSearchUsers() {
  const currentUser = authStore((store) => store.user)
  const updateSearchingResult = searchUsersStore((store) => store.updateSearchingResult)

  return async (searchingValue: string) => {
    const users = await readUsersFromDatabase()
    const searchRule = new RegExp(searchingValue, 'i')
  
    const searchedUsers = users.filter(user => (
      searchRule.test(user.login) &&
      user.id !== currentUser?.id
    ))
    
    updateSearchingResult(searchedUsers)
  }
}
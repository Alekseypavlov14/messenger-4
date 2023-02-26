import { readUsersFromDatabase } from "@entities/users"
import { searchUsersStore } from "../store"
import { authStore } from '@app/auth'

export function useSearchUsers() {
  const user = authStore((store) => store.user)
  const updateSearchingResult = searchUsersStore((store) => store.updateSearchingResult)

  return async (searchingValue: string) => {
    if (!user) return 
    
    const users = await readUsersFromDatabase()
    const searchRule = new RegExp(searchingValue, 'i')
  
    const searchedUsers = users.filter(candidate => (
      searchRule.test(candidate.login) &&
      candidate.id !== user.id
    ))
    
    updateSearchingResult(searchedUsers)
  }
}
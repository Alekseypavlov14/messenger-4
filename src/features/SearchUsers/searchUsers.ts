import { readUsersFromDatabase } from '@entities/users'

export async function searchUsers(searchingValue: string) {
  const users = await readUsersFromDatabase()

  const searchedUsers = users.filter(user => {
    const searchRule = new RegExp(searchingValue, 'i')
    return searchRule.test(user.login)
  })
  
  return searchedUsers
}
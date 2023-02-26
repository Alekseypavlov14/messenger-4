import { readUsersFromDatabase } from '../../api/readUsersFromDatabase'

export async function isUserLoginUnique(login: string) {
  const users = await readUsersFromDatabase()
  const usersLogins = users.map(user => user.login)
  return !usersLogins.includes(login)
}
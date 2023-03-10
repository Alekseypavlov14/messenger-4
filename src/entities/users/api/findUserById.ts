import { readUsersFromDatabase } from './readUsersFromDatabase'

export async function findUserById(userId: number) {
  const users = await readUsersFromDatabase()
  return users.find(user => user.id === userId) || null
}
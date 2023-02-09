import { readUsersFromDatabase } from './read'

export async function findById(userId: number) {
  const users = await readUsersFromDatabase()
  return users.find(user => user.id === userId) || null
}
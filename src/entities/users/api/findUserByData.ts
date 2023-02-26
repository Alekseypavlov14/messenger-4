import { readUsersFromDatabase } from "./readUsersFromDatabase"
import { UserData } from '../types/UserData'

export async function findUserByData(userData: UserData) {
  const users = await readUsersFromDatabase()

  const user = users.find(user => (
    user.login === userData.login &&
    user.password === userData.password
  ))

  return user || null
}
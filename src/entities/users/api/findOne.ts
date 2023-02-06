import { readUsersFromDatabase } from "./read"
import { UserData } from './../types/UserData'

export async function findOneUser(userData: UserData) {
  const users = await readUsersFromDatabase()

  const user = users.find(user => (
    user.login === userData.login &&
    user.password === userData.password
  ))

  return user
}
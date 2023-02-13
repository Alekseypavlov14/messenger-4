import { UserData } from "@entities/users"

export function isUserDataValid(userData: UserData) {
  return (
    userData.login.length > 0 &&
    userData.password.length >= 6
  )
}
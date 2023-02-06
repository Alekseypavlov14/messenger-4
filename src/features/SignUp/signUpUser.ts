import { createUserInDatabase, UserEntity } from "@entities/users"
import { generateId } from "@shared/utils/generateId"
import { SignUpData } from "./types/SignUpData"

export function signUpUser(userData: SignUpData) {
  const newUserId = generateId()

  const newUser: UserEntity = { 
    login: userData.login,
    password: userData.password,
    id: newUserId
  }
  
  createUserInDatabase(newUser)
}
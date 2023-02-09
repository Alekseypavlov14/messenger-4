import { readUsersFromDatabase } from '@entities/users'
import { isUserLoginUnique } from '../utils/isUserLoginUnique'
import { USERS_COLLECTION } from './collection'
import { CreateUserDto } from './../types/CreateUserDto'
import { generateId } from '@shared/utils/generateId'
import { UserEntity } from '../user.entity'
import { addDoc } from 'firebase/firestore'

export async function createUserInDatabase(userData: CreateUserDto) {
  if (!isUserLoginUnique(userData.login)) throw new Error('This user is already exists')

  const newUserId = generateId()

  const newUser: UserEntity = {
    ...userData,
    id: newUserId
  }

  await addDoc<UserEntity>(USERS_COLLECTION, newUser)

  const users = await readUsersFromDatabase()
  const user = users.find(user => user.id === newUserId) as UserEntity

  return user
}
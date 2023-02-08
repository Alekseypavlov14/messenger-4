import { getDocs } from 'firebase/firestore'
import { UserEntity } from '../user.entity'
import { USERS_COLLECTION } from './collection'

export async function readUsersFromDatabase() {
  const userDocs = await getDocs<UserEntity>(USERS_COLLECTION)
  const users = userDocs.docs.map(doc => doc.data())
  return users
}
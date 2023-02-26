import { USERS_COLLECTION } from './collection'
import { UserEntity } from '../user.entity'
import { getDocs } from 'firebase/firestore'

export async function readUsersFromDatabase() {
  const userDocs = await getDocs<UserEntity>(USERS_COLLECTION)
  const users = userDocs.docs.map(doc => doc.data())
  return users
}
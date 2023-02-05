import { query, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { UserEntity } from '../user.entity'
import { USERS_COLLECTION } from './collection'

type Callback = (snapshot: QuerySnapshot<UserEntity>) => void

export function readUsersFromDatabase(callback: Callback) {
  const users = query<UserEntity>(USERS_COLLECTION)
  onSnapshot(users, callback)
}
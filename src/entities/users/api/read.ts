import { query, onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore'
import { USERS_COLLECTION } from './collection'

type Callback = (snapshot: QuerySnapshot<DocumentData>) => void

export function readUsersFromDatabase(callback: Callback) {
  const users = query(USERS_COLLECTION)
  onSnapshot(users, callback)
}
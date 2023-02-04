import { USERS_COLLECTION} from '@entities/users/api/collection'
import { UserEntity } from '../user.entity'
import { addDoc } from 'firebase/firestore'

export async function createUserInDatabase(user: UserEntity) {
  await addDoc(USERS_COLLECTION, user)
}
import { USERS_COLLECTION_PATH } from "../const"
import { db, converter } from "@shared/firebase"
import { collection } from "firebase/firestore"
import { UserEntity } from "../user.entity"

export const USERS_COLLECTION = collection(db, USERS_COLLECTION_PATH)
  .withConverter(converter<UserEntity>())
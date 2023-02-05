import { collection, QueryDocumentSnapshot } from "firebase/firestore"
import { USERS_COLLECTION_PATH } from "../const"
import { UserEntity } from "../user.entity"
import { db } from "@shared/firebase"

export const USERS_COLLECTION = collection(db, USERS_COLLECTION_PATH)
  .withConverter({
    toFirestore: (data: UserEntity) => data,
    fromFirestore: (snap: QueryDocumentSnapshot<UserEntity>) => snap.data()
  })
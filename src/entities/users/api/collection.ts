import { USERS_COLLECTION_PATH } from "../const"
import { collection } from "firebase/firestore"
import { db } from "@shared/api/firebase"

export const USERS_COLLECTION = collection(db, USERS_COLLECTION_PATH)
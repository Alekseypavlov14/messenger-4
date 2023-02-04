import { CHATS_COLLECTION_PATH } from "../const";
import { collection } from "firebase/firestore";
import { db } from "@shared/api/firebase";

export const CHATS_COLLECTION = collection(db, CHATS_COLLECTION_PATH)
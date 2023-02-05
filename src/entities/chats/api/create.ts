import { CHAT_COLLECTION } from './collection'
import { addDoc } from "firebase/firestore"
import { ChatEntity } from "../chat.entity"

export function createChatInDatabase(chat: ChatEntity) {
  addDoc(CHAT_COLLECTION, chat)
}
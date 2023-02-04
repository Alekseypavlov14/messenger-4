import { CHATS_COLLECTION } from './collection';
import { ChatEntity } from '../chat.entity';
import { addDoc } from "firebase/firestore";

export async function createChatInDatabase(chat: ChatEntity) {
  await addDoc(CHATS_COLLECTION, chat)
}
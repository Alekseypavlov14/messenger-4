import { CHAT_COLLECTION } from './collection'
import { CreateChatDto } from '../types/CreateChatDto'
import { generateId } from '@shared/utils/generateId'
import { ChatEntity } from "../chat.entity"
import { addDoc } from "firebase/firestore"

export function createChatInDatabase(chatData: CreateChatDto) {
  const newChatId = generateId()

  const newChat: ChatEntity = {
    usersId: chatData,
    id: newChatId,
  }

  addDoc(CHAT_COLLECTION, newChat)
}
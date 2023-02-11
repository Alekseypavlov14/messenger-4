import { CHAT_COLLECTION } from './collection'
import { CreateChatDto } from '../types/CreateChatDto'
import { generateId } from '@shared/utils/generateId'
import { ChatEntity } from "../chat.entity"
import { findById } from './findById'
import { addDoc } from "firebase/firestore"

export async function createChatInDatabase(chatData: CreateChatDto) {
  const newChatId = generateId()

  const newChat: ChatEntity = {
    ...chatData,
    id: newChatId,
  }

  await addDoc(CHAT_COLLECTION, newChat)

  const chat = await findById(newChatId) as ChatEntity

  return chat
}
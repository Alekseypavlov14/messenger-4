import { readChatsFromDatabase } from './read'
import { CHAT_COLLECTION } from './collection'
import { CreateChatDto } from '../types/CreateChatDto'
import { generateId } from '@shared/utils/generateId'
import { ChatEntity } from "../chat.entity"
import { addDoc } from "firebase/firestore"

export async function createChatInDatabase(chatData: CreateChatDto) {
  const newChatId = generateId()

  const newChat: ChatEntity = {
    ...chatData,
    id: newChatId,
  }

  await addDoc(CHAT_COLLECTION, newChat)

  const chats = await readChatsFromDatabase()
  const chat = chats.find(chat => chat.id === newChatId) as ChatEntity

  return chat
}
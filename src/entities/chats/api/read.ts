import { CHAT_COLLECTION } from './collection'
import { ChatEntity } from '../chat.entity'
import { getDocs } from 'firebase/firestore'

export async function readChatsFromDatabase() {
  const chatDocs = await getDocs<ChatEntity>(CHAT_COLLECTION)
  const chats = chatDocs.docs.map(doc => doc.data())
  return chats
}
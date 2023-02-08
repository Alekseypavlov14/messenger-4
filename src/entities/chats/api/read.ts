import { getDocs } from 'firebase/firestore'
import { ChatEntity } from '../chat.entity'
import { CHAT_COLLECTION } from './collection'

export async function readChatsFromDatabase() {
  const chatDocs = await getDocs<ChatEntity>(CHAT_COLLECTION)
  const chats = chatDocs.docs.map(doc => doc.data())
  return chats
}
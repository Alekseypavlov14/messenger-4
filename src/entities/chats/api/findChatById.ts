import { readChatsFromDatabase } from "./readChatsFromDatabase"

export async function findChatById(chatId: number) {
  const chats = await readChatsFromDatabase()
  return chats.find(chat => chat.id === chatId) || null
}
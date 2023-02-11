import { readChatsFromDatabase } from "./read"

export async function findById(chatId: number) {
  const chats = await readChatsFromDatabase()
  return chats.find(chat => chat.id === chatId) || null
}
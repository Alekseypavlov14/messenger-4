import { readChatsFromDatabase } from "./readChatsFromDatabase"

export async function findChatsByUserId(userId: number) {
  const chats = await readChatsFromDatabase()
  const chatsOfUser = chats.filter(chat => chat.usersId.includes(userId))
  return chatsOfUser
}
import { readChatsFromDatabase } from "./read"

export async function findChatsByUser(userId: number) {
  const chats = await readChatsFromDatabase()
  const chatsOfUser = chats.filter(chat => chat.usersId.includes(userId))
  return chatsOfUser
}
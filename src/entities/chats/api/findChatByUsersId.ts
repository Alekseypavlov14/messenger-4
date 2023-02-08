import { readChatsFromDatabase } from "./read"
import { getChatByUsersId } from "../utils/getChatByUsersId"

export async function findChatByUsersId(usersId: number[]) {
  const chats = await readChatsFromDatabase()
  return getChatByUsersId(chats, usersId)
}
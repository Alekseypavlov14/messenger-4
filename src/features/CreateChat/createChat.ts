import { createChatInDatabase, findChatByUsersId } from "@entities/chats"

export async function createChat(usersId: number[]) {
  const chat = await findChatByUsersId(usersId)
  if (chat) return chat
  return await createChatInDatabase(usersId)
}
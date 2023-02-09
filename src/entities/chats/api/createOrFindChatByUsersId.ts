import { findChatByUsersId, createChatInDatabase } from '@entities/chats'

export async function createOrFindChatByUsersId(usersId: number[]) {
  return await findChatByUsersId(usersId) || await createChatInDatabase({ usersId })
}
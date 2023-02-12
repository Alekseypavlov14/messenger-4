import { createChatInDatabase } from './createChatInDatabase'
import { findChatByUsersId } from './findChatByUsersId'

export async function createOrFindChatByUsersId(usersId: number[]) {
  return await findChatByUsersId(usersId) || await createChatInDatabase({ usersId })
}
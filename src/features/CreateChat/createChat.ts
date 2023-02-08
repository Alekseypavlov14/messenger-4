import { ChatEntity, createChatInDatabase } from "@entities/chats"
import { generateId } from '@shared/utils/generateId'

export function createChat(usersId: number[]) {
  const newChatId = generateId()

  const newChat: ChatEntity = {
    id: newChatId,
    usersId: usersId
  }

  createChatInDatabase(newChat)
}
import { ChatEntity, createChatInDatabase } from "@entities/chats"
import { generateId } from '@shared/utils/generateId'
import { authStore } from '@app/auth'

export function createChat(usersId: number[]) {
  const user = authStore((store) => store.user)
  if (!user) return

  const newChatId = generateId()
  const chatMembersId = usersId.concat(user.id)

  const newChat: ChatEntity = {
    id: newChatId,
    usersId: chatMembersId
  }

  createChatInDatabase(newChat)
}
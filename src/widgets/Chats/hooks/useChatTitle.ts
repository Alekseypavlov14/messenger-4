import { ChatEntity, defaultChatName, getChatTitle } from '@entities/chats'
import { AuthUserValue } from '@app/auth'

export function useChatTitle() {
  return async (chat: ChatEntity, user: AuthUserValue) => {
    if (!user) return defaultChatName
    return await getChatTitle(chat, user)
  }
}
import { defaultChatName, getChatTitle } from '@entities/chats'
import { findChatById } from "@entities/chats"
import { authStore } from "@app/auth"

export function useChatTitle() {
  const user = authStore((store) => store.user)

  return async (chatId: number) => {
    if (!user) return defaultChatName

    const chat = await findChatById(chatId)
    if (!chat) return defaultChatName

    return getChatTitle(chat, user)
  }
}
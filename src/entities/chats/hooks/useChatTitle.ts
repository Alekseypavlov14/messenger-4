import { defaultChatName, getChatTitle } from '@entities/chats'
import { findChatById } from "@entities/chats"
import { authStore } from "@app/auth"
import { useEffect } from 'react'

type Callback = (title: string) => void

export function useChatTitle(callback: Callback, chatId: number) {
  const user = authStore((store) => store.user)

  const getChatTitleHandler = async () => {
    if (!user) return defaultChatName

    const chat = await findChatById(chatId)
    if (!chat) return defaultChatName

    return getChatTitle(chat, user)
  }
  
  useEffect(() => {
    getChatTitleHandler().then(callback)
  }, [chatId])
}
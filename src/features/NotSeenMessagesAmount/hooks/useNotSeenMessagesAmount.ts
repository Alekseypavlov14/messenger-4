import { readMessagesFromDatabase } from '@entities/messages'
import { authStore } from '@app/auth'
import { useEffect } from 'react'

type Callback = (amount: number) => void

export async function useNotSeenMessagesAmount(callback: Callback, chatId: number) {
  const user = authStore((store) => store.user)

  useEffect(() => {
    if (!user) return

    readMessagesFromDatabase().then((messages) => {
      const chatMessages = messages.filter(message => message.chatId === chatId)
      const notSeenMessages = chatMessages.filter(message => message.userId !== user.id && !message.seen)
      const notSeenMessagesAmount = notSeenMessages.length
      callback(notSeenMessagesAmount)
    })
  }, [chatId])
}
import { subscribeOnMessages } from "@entities/messages"
import { messagesStore } from './../store'
import { useEffect } from 'react'

export function useChatMessages(chatId: number) {
  const updateMessages = messagesStore((store) => store.updateMessages)

  useEffect(() => {
    subscribeOnMessages((messages) => {
      const chatMessages = messages.filter(message => message.chatId === chatId)
      updateMessages(chatMessages)
    })
  }, [chatId])
}
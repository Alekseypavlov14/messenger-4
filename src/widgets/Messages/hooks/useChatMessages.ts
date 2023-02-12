import { subscribeOnMessages } from "@entities/messages"
import { messagesStore } from './../store'

export function useChatMessages(chatId: number) {
  const updateMessages = messagesStore((store) => store.updateMessages)

  return () => {
    subscribeOnMessages((messages) => {
      const chatMessages = messages.filter(message => message.chatId === chatId)
      updateMessages(chatMessages)
    })
  }
}
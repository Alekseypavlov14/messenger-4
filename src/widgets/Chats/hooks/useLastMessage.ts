import { findLatestMessage, readMessagesFromDatabase } from "@entities/messages"

export function useLastMessage() {
  return async (chatId: number) => {
    const messages = await readMessagesFromDatabase()
    const chatMessages = messages.filter(messages => messages.chatId === chatId)
    const lastMessage = findLatestMessage(chatMessages)
    return lastMessage
  }
}
import { findLatestMessage, MessageEntity, readMessagesFromDatabase } from "@entities/messages"

type Callback = (message: MessageEntity | null) => void

export async function useLastMessage(callback: Callback, chatId: number) {
  const messages = await readMessagesFromDatabase()

  const chatMessages = messages.filter(messages => messages.chatId === chatId)
  const lastMessage = findLatestMessage(chatMessages)

  callback(lastMessage)
}
import { findLastMessage, MessageEntity, readMessagesFromDatabase } from "@entities/messages"
import { useEffect } from "react"

type Callback = (message: MessageEntity | null) => void

export async function useLastMessage(callback: Callback, chatId: number) {
  useEffect(() => {
    readMessagesFromDatabase().then(messages => {
      const chatMessages = messages.filter(messages => messages.chatId === chatId)
      const lastMessage = findLastMessage(chatMessages)
    
      callback(lastMessage)
    })
  }, [chatId])
}

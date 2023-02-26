import { findLastMessage, MessageEntity, readMessagesFromDatabase } from "@entities/messages"
import { useEffect, useState } from "react"

export function useLastMessage(chatId: number) {
  const [lastMessage, setLastMessage] = useState<MessageEntity | null>(null)
  
  useEffect(() => {
    readMessagesFromDatabase().then(messages => {
      const chatMessages = messages.filter(messages => messages.chatId === chatId)
      const lastMessage = findLastMessage(chatMessages)
    
      setLastMessage(lastMessage)
    })
  }, [chatId])

  return lastMessage
}

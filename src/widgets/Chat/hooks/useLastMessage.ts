import { findLastMessage, MessageEntity, readMessagesFromDatabase } from "@entities/messages"
import { useEffect } from "react"

type Callback = (message: MessageEntity | null) => void

export async function useLastMessage(callback: Callback, chatId: number) {
  function serveLastMessage(messages: MessageEntity[]) {
    const chatMessages = messages.filter(messages => messages.chatId === chatId)
    const lastMessage = findLastMessage(chatMessages)
  
    callback(lastMessage)
  }

  useEffect(() => {
    readMessagesFromDatabase().then(serveLastMessage)
  }, [chatId])
}

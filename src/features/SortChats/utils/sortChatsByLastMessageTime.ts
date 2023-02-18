import { MessageEntity, readMessagesFromDatabase } from '@entities/messages'
import { sortMessagesByTime } from './sortMessagesByTime'
import { findLastMessage } from '@entities/messages'
import { ChatEntity } from "@entities/chats"

export async function sortChatsByLastMessageTime(chats: ChatEntity[]) {
  const messages = await readMessagesFromDatabase()

  const emptyChats: ChatEntity[] = []
  const lastMessages: MessageEntity[] = []

  chats.forEach(chat => {
    const chatMessages = messages.filter(message => message.chatId === chat.id)
    const lastChatMessage = findLastMessage(chatMessages)

    if (lastChatMessage) return lastMessages.push(lastChatMessage)
    
    emptyChats.push(chat)
  })

  const lastMessagesSortedByTime = sortMessagesByTime(lastMessages)
  const sortedChats = lastMessagesSortedByTime.map(message => chats.find(chat => chat.id === message.chatId)) as ChatEntity[]

  return sortedChats.concat(emptyChats)
}
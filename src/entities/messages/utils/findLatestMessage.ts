import { MessageEntity } from './../message.entity'

export function findLatestMessage(messages: MessageEntity[]): MessageEntity | null {
  if (messages.length === 0) return null

  const messageTimes = messages.map(message => message.time)
  const lastTime = Math.max(...messageTimes)
  const lastMessage = messages.find(message => message.time === lastTime)

  if (!lastMessage) return null
  return lastMessage
}
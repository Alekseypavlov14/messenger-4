import { MessageEntity } from "@entities/messages"

export function sortMessagesByTime(messages: MessageEntity[]) {
  const messagesCopy = messages.map(message => message) 

  const sortedMessages = messagesCopy.sort(sortFunction)

  return sortedMessages
}

function sortFunction(message1: MessageEntity, message2: MessageEntity) {
  return message2.time - message1.time // from new to old messages
}
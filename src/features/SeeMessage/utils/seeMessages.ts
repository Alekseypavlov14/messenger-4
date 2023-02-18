import { MessageEntity, updateMessage } from "@entities/messages"

export function seeMessages(messages: MessageEntity[]) {
  messages.forEach(message => {
    updateMessage({ ...message, seen: true })
  })
}
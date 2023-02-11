import { createMessageInDatabase } from '@entities/messages'
import { sendMessageStore } from './../store'
import { authStore } from '@app/auth'

export function useSendMessage() {
  const user = authStore((store) => store.user)
  const chatId = sendMessageStore((store) => store.chatId)

  return async (messageText: string) => {
    if (!user) return

    return await createMessageInDatabase({
      chatId: chatId,
      userId: user.id,
      text: messageText
    })
  }
}
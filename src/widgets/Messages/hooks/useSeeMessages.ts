import { messagesStore } from './../store'
import { seeMessages } from '@features/SeeMessage'
import { authStore } from '@app/auth'
import { useEffect } from 'react'

export function useSeeMessages() {
  const messages = messagesStore((store) => store.messages)
  const user = authStore((store) => store.user)

  useEffect(() => {
    const nonSeenIncomingMessages = messages.filter(message => (
      !message.seen && 
      message.userId !== user?.id
    ))

    seeMessages(nonSeenIncomingMessages)
  }, [messages])
}
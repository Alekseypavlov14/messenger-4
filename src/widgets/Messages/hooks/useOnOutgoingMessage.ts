import { ScrollAnchorRef } from "@features/ScrollDown"
import { ScrollCallback } from "../types/ScrollCallback"
import { messagesStore } from "../store"
import { authStore } from '@app/auth'
import { useEffect } from 'react'

export function useScrollOnOutgoingMessage(callback: ScrollCallback, ref: ScrollAnchorRef) {
  const messages = messagesStore((store) => store.messages)
  const user = authStore((store) => store.user)

  useEffect(() => {
    const lastMessage = messages.at(-1)
    if (!lastMessage || !user) return
    
    if (lastMessage.userId === user.id) callback()
  }, [messages, ref])
}
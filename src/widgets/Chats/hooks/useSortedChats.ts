import { sortChatsByLastMessageTime } from '@features/SortChats'
import { findChatsByUserId } from '@entities/chats'
import { chatsStorage } from './../store'
import { authStore } from '@app/auth'
import { useEffect } from 'react'

export function useSortedChats() {
  const user = authStore((store) => store.user)
  const updateChats = chatsStorage((store) => store.updateChats)

  useEffect(() => {
    if (!user) return

    findChatsByUserId(user.id)
      .then(chats => sortChatsByLastMessageTime(chats))
      .then(chats => updateChats(chats))
  }, [])
}
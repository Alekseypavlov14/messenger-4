import { ChatEntity, findChatsByUserId } from "@entities/chats"
import { authStore } from '@app/auth/store'
import { useEffect } from "react"

type Callback = (chats: ChatEntity[]) => void

export function useChats(callback: Callback) {
  const user = authStore((store) => store.user)

  useEffect(() => {
    if (!user) return
    findChatsByUserId(user.id).then(callback)
  }, [user])
}
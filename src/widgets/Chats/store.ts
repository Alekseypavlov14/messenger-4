import { ChatEntity } from "@entities/chats"
import { create } from "zustand"

interface ChatsStorage {
  chats: ChatEntity[]
  updateChats: (chats: ChatEntity[]) => void
}

export const chatsStorage = create<ChatsStorage>((set) => ({
  chats: [],
  updateChats: (chats => {
    set((state) => ({ ...state, chats }))
  })
}))
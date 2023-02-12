import { MessageEntity } from "@entities/messages"
import { create } from "zustand"

interface MessagesStore {
  messages: MessageEntity[]
  updateMessages: (messages: MessageEntity[]) => void
}

export const messagesStore = create<MessagesStore>((set) => ({
  messages: [],
  updateMessages: (messages) => set((state) => ({ ...state, messages }))
}))
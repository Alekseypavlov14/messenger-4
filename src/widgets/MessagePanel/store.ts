import { create } from "zustand"

interface SendMessageStore {
  messageText: string
  updateMessageText: (value: string) => void
  chatId: number
  setChatId: (chatId: number) => void
}

export const sendMessageStore = create<SendMessageStore>((set) => ({
  messageText: '',
  updateMessageText: (value) => {
    set((state) => ({
      ...state,
      messageText: value
    }))
  },
  chatId: 0,
  setChatId: (chatId) => set((state) => ({ ...state, chatId }))
}))
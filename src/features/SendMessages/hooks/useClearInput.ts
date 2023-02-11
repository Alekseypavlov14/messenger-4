import { sendMessageStore } from './../store'

export function useClearInput() {
  const updateMessageText = sendMessageStore((store) => store.updateMessageText)
  return () => updateMessageText('')
}
import { MutableRefObject, useEffect } from 'react'
import { sendMessageStore } from './../store'

const AVERAGE_SYMBOL_WIDTH = 10

export function useInputSize(ref: MutableRefObject<HTMLTextAreaElement | null>) {
  const messageText = sendMessageStore((store) => store.messageText)

  useEffect(() => {
    if (!ref.current) return

    const lettersNumberPerLine = ref.current.offsetWidth / AVERAGE_SYMBOL_WIDTH

    if (messageText.length > lettersNumberPerLine) ref.current.rows = 2
    if (messageText.length <= lettersNumberPerLine) ref.current.rows = 1
  }, [ref, messageText])
}
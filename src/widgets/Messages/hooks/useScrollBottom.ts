import { RefObject } from "react"

export function useScrollBottom(messagesBottomRef: RefObject<HTMLDivElement>) {
  return () => {
    if (!messagesBottomRef.current) return
    messagesBottomRef.current.scrollIntoView({ behavior: 'auto' })
  }
}
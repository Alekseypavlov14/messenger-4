import { useRef, useEffect, RefObject } from "react"
import { useScrollBottom } from "./useScrollBottom"
import { messagesStore } from "../store"

export function useScrollOnMount(messagesBottomRef: RefObject<HTMLDivElement>) {
  const messages = messagesStore((store) => store.messages)
  const scrollBottom = useScrollBottom(messagesBottomRef)
  
  const isScrollLocked = useRef(false)

  useEffect(() => {
    if (!isScrollLocked.current) scrollBottom()
    if (messages.length > 0 && messagesBottomRef.current) isScrollLocked.current = true
  }, [messagesBottomRef, messages])
}
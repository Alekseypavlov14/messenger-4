import { useRef, useEffect } from "react"
import { messagesStore } from "../store"
import { useScroll } from "@features/ScrollDown"

export function useScrollOnMount() {
  const messages = messagesStore((store) => store.messages)
  const [scroll, ref] = useScroll()
  
  const isScrollLocked = useRef(false)

  useEffect(() => {
    if (!isScrollLocked.current) scroll()
    if (messages.length > 0 && ref.current) isScrollLocked.current = true
  }, [ref, messages])

  return ref
}
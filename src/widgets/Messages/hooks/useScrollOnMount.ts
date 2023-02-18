import { useRef, useEffect } from "react"
import { ScrollAnchorRef } from "@features/ScrollDown"
import { ScrollCallback } from "../types/ScrollCallback"
import { messagesStore } from "../store"

export function useScrollOnMount(callback: ScrollCallback, ref: ScrollAnchorRef) {
  const messages = messagesStore((store) => store.messages)
  
  const isScrollLocked = useRef(false)

  useEffect(() => {
    if (!isScrollLocked.current) callback()
    if (messages.length > 0 && ref.current) isScrollLocked.current = true
  }, [ref, messages])
}
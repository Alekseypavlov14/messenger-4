import { useScrollReturnValue } from "../types/UseScrollReturnValue"
import { useRef } from "react"

export function useScroll(): useScrollReturnValue {
  const scrollAnchorRef = useRef<HTMLDivElement>(null)

  function scrollHandler() {
    if (!scrollAnchorRef.current) return
    scrollAnchorRef.current.scrollIntoView({ behavior: 'auto' })
  }

  return [scrollHandler, scrollAnchorRef]
}
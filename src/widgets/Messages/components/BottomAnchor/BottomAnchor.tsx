import { useScrollOnMount } from './../../hooks/useScrollOnMount'
import { FC, useRef } from 'react'
import styles from './BottomAnchor.module.css'

interface BottomAnchorProps {}

export const BottomAnchor: FC<BottomAnchorProps> = () => {
  const bottomAnchor = useRef<HTMLDivElement>(null)
  useScrollOnMount(bottomAnchor)

  return (
    <div 
      className={styles.BottomAnchor} 
      ref={bottomAnchor}
    />
  )
}
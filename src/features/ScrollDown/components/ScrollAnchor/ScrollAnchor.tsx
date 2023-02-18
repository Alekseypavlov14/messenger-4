import { FC, MutableRefObject } from 'react'
import styles from './ScrollAnchor.module.css'

interface ScrollAnchorProps {
  reference: MutableRefObject<HTMLDivElement | null>
}

export const ScrollAnchor: FC<ScrollAnchorProps> = ({ reference }) => {
  return (
    <div className={styles.ScrollAnchor} ref={reference} />
  )
}
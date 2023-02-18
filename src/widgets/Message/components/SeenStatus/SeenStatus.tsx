import { FC } from 'react'
import styles from './SeenStatus.module.css'

interface SeenStatusProps {
  seen: boolean
}

export const SeenStatus: FC<SeenStatusProps> = ({ seen }) => {
  return (
    <div className={styles.SeenStatus}>
      {seen && 'seen'}
    </div>
  )
}
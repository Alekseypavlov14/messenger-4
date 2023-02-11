import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import styles from './SeenStatus.module.css'

interface SeenStatusProps {
  seen: boolean
}

export const SeenStatus: FC<SeenStatusProps> = ({ seen }) => {
  return (
    <div className={styles.SeenStatus}>
      {seen && <FontAwesomeIcon icon={faCheck} />}
    </div>
  )
}
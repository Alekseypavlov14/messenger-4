import { getTimeView } from '@shared/utils/getTimeView'
import { FC } from 'react'
import styles from './Time.module.css'

interface TimeProps {
  time: number
}

export const Time: FC<TimeProps> = ({ time }) => {
  const timeView = getTimeView(time)

  return (
    <div className={styles.Time}>
      {timeView}
    </div>
  )
}
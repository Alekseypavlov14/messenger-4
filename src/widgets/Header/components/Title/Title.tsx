import { useNavigation } from '@app/navigation'
import { FC } from 'react'
import styles from './Title.module.css'

interface TitleProps {}

export const Title: FC<TitleProps> = () => {
  const { navigateHomePage } = useNavigation()

  return (
    <div 
      className={styles.Title}
      onClick={navigateHomePage}
    >
      Messenger
    </div>
  )
}
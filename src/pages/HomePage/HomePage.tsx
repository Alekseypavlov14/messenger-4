import { FC } from 'react'
import { Header } from '@widgets/Header'
import { Chats } from '@widgets/Chats'
import styles from './HomePage.module.css'
import { authStore, useRedirect } from '@app/auth'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  useRedirect()

  return (
    <div className={styles.HomePage}>
      <Header />
      <Chats />
    </div>
  )
}
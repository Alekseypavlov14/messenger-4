import { FC } from 'react'
import { Header } from '@widgets/Header'
import { Chats } from '@features/ShowChats'
import styles from './HomePage.module.css'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={styles.HomePage}>
      <Header />
      <Chats />
    </div>
  )
}
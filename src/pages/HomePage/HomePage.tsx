import { FC } from 'react'
import { Header } from '@widgets/Header'
import styles from './HomePage.module.css'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={styles.HomePage}>
      <Header />
    </div>
  )
}
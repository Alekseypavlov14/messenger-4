import { FC } from 'react'
import { Header } from '@widgets/Header'
import { SearchField } from '@features/SearchUsers'
import styles from './SearchPage.module.css'

interface SearchPageProps {}

export const SearchPage: FC<SearchPageProps> = () => {
  return (
    <div className={styles.SearchPage}>
      <Header />
      <SearchField />
    </div>
  )
}
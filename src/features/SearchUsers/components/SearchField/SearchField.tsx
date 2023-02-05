import { FC } from 'react'
import { SearchInput } from '../SearchInput/SearchInput'
import { SearchResult } from '../SearchResult/SearchResult'
import styles from './SearchField.module.css'

interface SearchFieldProps {}

export const SearchField: FC<SearchFieldProps> = () => {
  return (
    <div className={styles.SearchField}>
      <SearchInput />
      <SearchResult />
    </div>
  )
}
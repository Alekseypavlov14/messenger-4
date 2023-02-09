import { FC } from 'react'
import { SearchInput } from '@features/SearchUsers'
import { SearchResult } from '@features/SearchUsers'
import styles from './SearchField.module.css'
import { Container } from 'standard-ui'

interface SearchFieldProps {}

export const SearchField: FC<SearchFieldProps> = () => {
  return (
    <div className={styles.SearchField}>
      <Container className={styles.SearchFieldContainer}>
        <SearchInput />
        <SearchResult />
      </Container>
    </div>
  )
}
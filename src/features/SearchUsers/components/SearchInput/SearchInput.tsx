import { searchUsersStore } from '../../store'
import { ChangeEvent, FC } from 'react'
import { Input } from 'standard-ui'
import styles from './SearchInput.module.css'

interface SearchInputProps {}

export const SearchInput: FC<SearchInputProps> = () => {
  const searchingValue = searchUsersStore((state) => state.searchingValue)
  const search = searchUsersStore((state) => state.search)
  
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => search(e.target.value)
  
  return (
    <Input 
      className={styles.SearchInput}
      onChange={searchHandler}
      placeholder='Search by login...'
      value={searchingValue}
    />
  )
}
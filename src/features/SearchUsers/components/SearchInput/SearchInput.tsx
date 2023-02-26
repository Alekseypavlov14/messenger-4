import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useSearchUsers } from './../../hooks/useSearchUsers'
import { Input } from 'standard-ui'
import styles from './SearchInput.module.css'

interface SearchInputProps {}

export const SearchInput: FC<SearchInputProps> = () => {
  const [searchingValue, setSearchingValue] = useState('')
  const search = useSearchUsers()
  
  function updateSearchingValue(e: ChangeEvent<HTMLInputElement>) {
    setSearchingValue(e.target.value.trim())
  }

  useEffect(() => {
    search(searchingValue)
  }, [searchingValue])

  return (
    <Input 
      className={styles.SearchInput}
      onChange={updateSearchingValue}
      placeholder='Search by login...'
      value={searchingValue}
    />
  )
}
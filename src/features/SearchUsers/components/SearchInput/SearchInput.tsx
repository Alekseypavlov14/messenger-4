import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useSearchUsers } from './../../hooks/useSearchUsers'
import { Input } from 'standard-ui'
import styles from './SearchInput.module.css'

interface SearchInputProps {}

export const SearchInput: FC<SearchInputProps> = () => {
  const [value, setValue] = useState('')
  const search = useSearchUsers()
  
  function searchHandler(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value.trim())
  }

  useEffect(() => {
    search(value)
  }, [value])

  return (
    <Input 
      className={styles.SearchInput}
      onChange={searchHandler}
      placeholder='Search by login...'
      value={value}
    />
  )
}
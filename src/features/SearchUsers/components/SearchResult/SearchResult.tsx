import { FC } from 'react'
import { searchUsersStore } from './../../store'
import { SearchedUser } from '../SearchedUser/SearchedUser'
import styles from './SearchResult.module.css'

interface SearchResultProps {}

export const SearchResult: FC<SearchResultProps> = () => {
  const searchingResult = searchUsersStore((state) => state.searchingResult)

  return (
    <div className={styles.SearchResult}>
      {searchingResult.map(user => (
        <SearchedUser 
          login={user.login}
          id={user.id}
          key={user.id} 
        />
      ))}
    </div>
  )
}
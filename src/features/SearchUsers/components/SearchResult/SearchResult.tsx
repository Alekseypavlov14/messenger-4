import { FC } from 'react'
import { searchUsersStore } from './../../store'
import { SearchedUser } from '../SearchedUser/SearchedUser'
import styles from './SearchResult.module.css'

interface SearchResultProps {}

export const SearchResult: FC<SearchResultProps> = () => {
  const searchResult = searchUsersStore((state) => state.searchResult)

  return (
    <div className={styles.SearchResult}>
      {searchResult.map(user => (
        <SearchedUser 
          login={user.login}
          id={user.id}
          key={user.id} 
        />
      ))}
    </div>
  )
}
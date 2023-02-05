import { searchUsersStore } from './../../store'
import { FC } from 'react'
import styles from './SearchResult.module.css'
import { SearchedUser } from '../SearchedUser/SearchedUser'

interface SearchResultProps {}

export const SearchResult: FC<SearchResultProps> = () => {
  const searchResult = searchUsersStore((state) => state.searchResult)

  return (
    <div className={styles.SearchResult}>
      {searchResult.map(user => (
        <SearchedUser key={user.id} login={user.login} />
      ))}
    </div>
  )
}
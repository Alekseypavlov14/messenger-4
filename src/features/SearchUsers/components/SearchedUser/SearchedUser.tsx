import { FC } from 'react'
import styles from './SearchedUser.module.css'

interface SearchedUserProps {
  login: string
}

export const SearchedUser: FC<SearchedUserProps> = ({ login }) => {
  return (
    <div className={styles.SearchedUser}>
      {login}
    </div>
  )
}
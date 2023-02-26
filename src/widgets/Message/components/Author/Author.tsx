import { useAuthorLogin } from './../../hooks/useAuthorLogin'
import { FC } from 'react'
import styles from './Author.module.css'

interface AuthorProps {
  authorId: number
}

export const Author: FC<AuthorProps> = ({ authorId }) => {
  const login = useAuthorLogin(authorId)

  return (
    <div className={styles.Author}>
      {login}
    </div>
  )
}
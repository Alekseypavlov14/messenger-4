import { authorLoginPreloader } from './../../const'
import { useAuthorLogin } from './../../hooks/useAuthorLogin'
import { FC, useState } from 'react'
import styles from './Author.module.css'

interface AuthorProps {
  authorId: number
}

export const Author: FC<AuthorProps> = ({ authorId }) => {
  const [login, setLogin] = useState<string>(authorLoginPreloader)
  useAuthorLogin((login) => setLogin(login), authorId)

  return (
    <div className={styles.Author}>
      {login}
    </div>
  )
}
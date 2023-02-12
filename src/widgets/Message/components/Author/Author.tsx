import { FC, useEffect, useState } from 'react'
import { findUserById, UserEntity } from '@entities/users'
import styles from './Author.module.css'

const authorPreloader = 'User'

interface AuthorProps {
  authorId: number
}

export const Author: FC<AuthorProps> = ({ authorId }) => {
  const [author, setAuthor] = useState<UserEntity | null>(null)

  useEffect(() => {
    findUserById(authorId).then(author => setAuthor(author))
  }, [])

  return (
    <div className={styles.Author}>
      {author?.login || authorPreloader}
    </div>
  )
}
import { FC, useEffect, useState } from 'react'
import { findById, UserEntity } from '@entities/users'
import styles from './Author.module.css'

const authorPreloader = 'User'

interface AuthorProps {
  authorId: number
}

export const Author: FC<AuthorProps> = ({ authorId }) => {
  const [author, setAuthor] = useState<UserEntity | null>(null)

  useEffect(() => {
    findById(authorId).then(author => setAuthor(author))
  }, [])

  return (
    <div className={styles.Author}>
      {author?.login || authorPreloader}
    </div>
  )
}
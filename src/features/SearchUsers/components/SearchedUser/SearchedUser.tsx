import { useCreateChat } from './../../hooks/useCreateChat'
import { UserEntity } from '@entities/users'
import { FC } from 'react'
import styles from './SearchedUser.module.css'

interface SearchedUserProps extends Omit<UserEntity, 'password'> {}

export const SearchedUser: FC<SearchedUserProps> = ({ login, id }) => {
  const createChatHandler = useCreateChat(id)

  return (
    <div 
      className={styles.SearchedUser}
      onClick={createChatHandler}
    >
      {login}
    </div>
  )
}
import { FC } from 'react'
import { UserEntity } from '@entities/users'
import { createChat } from '@features/CreateChat'
import { authStore } from '@app/auth'
import styles from './SearchedUser.module.css'

interface SearchedUserProps extends Omit<UserEntity, 'password'> {}

export const SearchedUser: FC<SearchedUserProps> = ({ login, id }) => {
  const user = authStore((store) => store.user)

  function createChatHandler() {
    if (!user) return
    createChat([id, user.id])
  }

  return (
    <div 
      className={styles.SearchedUser}
      onClick={createChatHandler}
    >
      {login}
    </div>
  )
}
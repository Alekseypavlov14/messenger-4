import { FC } from 'react'
import { createOrFindChatByUsersId } from '@entities/chats'
import { useNavigation } from '@app/navigation'
import { UserEntity } from '@entities/users'
import { authStore } from '@app/auth'
import styles from './SearchedUser.module.css'

interface SearchedUserProps extends Omit<UserEntity, 'password'> {}

export const SearchedUser: FC<SearchedUserProps> = ({ login, id }) => {
  const user = authStore((store) => store.user)
  const { navigateChatPage } = useNavigation()

  async function createChatHandler() {
    if (!user) return

    const usersId = [id, user.id]
    const chat = await createOrFindChatByUsersId(usersId)
    navigateChatPage(chat.id)
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
import { useSortedChats } from './hooks/useSortedChats'
import { chatsStorage } from './store'
import { Container } from 'standard-ui'
import { Chat } from '@widgets/Chat'
import { FC } from 'react'
import styles from './Chats.module.css'

interface ChatsProps {}

export const Chats: FC<ChatsProps> = () => {
  const chats = chatsStorage((store) => store.chats)
  useSortedChats()

  return (
    <Container className={styles.Container}>
      <div className={styles.Chats}>
        {chats.map(chat => (
          <Chat 
            id={chat.id}
            name={chat.name}
            usersId={chat.usersId}
            key={chat.id}
          />
        ))}
      </div>
    </Container>
  )
}
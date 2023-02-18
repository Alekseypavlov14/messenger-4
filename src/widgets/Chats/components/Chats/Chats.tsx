import { ChatEntity, useChats } from '@entities/chats'
import { FC, useState } from 'react'
import { Container } from 'standard-ui'
import { Chat } from '../Chat/Chat'
import styles from './Chats.module.css'

interface ChatsProps {}

export const Chats: FC<ChatsProps> = () => {
  const [chats, setChats] = useState<ChatEntity[]>([])
  useChats((chats) => setChats(chats))

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
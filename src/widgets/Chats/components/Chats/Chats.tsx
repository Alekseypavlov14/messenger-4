import { ChatEntity, findChatsByUserId } from '@entities/chats'
import { FC, useEffect, useState } from 'react'
import { Container } from 'standard-ui'
import { authStore } from '@app/auth'
import { Chat } from '../Chat/Chat'
import styles from './Chats.module.css'

interface ChatsProps {}

export const Chats: FC<ChatsProps> = () => {
  const [chats, setChats] = useState<ChatEntity[]>([])
  const user = authStore((store) => store.user)

  useEffect(() => {
    if (!user) return
    findChatsByUserId(user.id).then(chats => setChats(chats))
  }, [])

  return (
    <Container>
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
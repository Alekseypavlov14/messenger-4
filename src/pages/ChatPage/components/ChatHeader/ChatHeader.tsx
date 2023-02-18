import { Container, Title } from 'standard-ui'
import { useChatTitle } from '@entities/chats'
import { FC, useState } from 'react'
import styles from './ChatHeader.module.css'

interface ChatHeaderProps {
  chatId: number
}

export const ChatHeader: FC<ChatHeaderProps> = ({ chatId }) => {
  const [title, setTitle] = useState('')
  useChatTitle((title) => setTitle(title), chatId)

  return (
    <div className={styles.ChatHeader}>
      <Container className={styles.Container}>
        <Title className={styles.Title} bold>{title}</Title>
      </Container>
    </div>
  )
}
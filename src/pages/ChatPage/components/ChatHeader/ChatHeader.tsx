import { FC, useEffect, useState } from 'react'
import { useChatTitle } from '@pages/ChatPage/hooks/useChatTitle'
import { Container, Title } from 'standard-ui'
import styles from './ChatHeader.module.css'

interface ChatHeaderProps {
  chatId: number
}

export const ChatHeader: FC<ChatHeaderProps> = ({ chatId }) => {
  const [title, setTitle] = useState('')
  const getChatTitle = useChatTitle()

  useEffect(() => {
    getChatTitle(chatId).then(title => setTitle(title))
  }, [chatId])

  return (
    <div className={styles.ChatHeader}>
      <Container className={styles.Container}>
        <Title className={styles.Title} bold>{title}</Title>
      </Container>
    </div>
  )
}
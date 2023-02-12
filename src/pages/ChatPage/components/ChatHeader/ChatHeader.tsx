import { FC, useEffect, useState } from 'react'
import { useChatTitle } from '@pages/ChatPage/hooks/useChatTitle'
import styles from './ChatHeader.module.css'
import { Container } from 'standard-ui'

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
        <div className={styles.Title}>{title}</div>
      </Container>
    </div>
  )
}